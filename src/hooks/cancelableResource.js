// Caches for all of the premises, so they don't have to be
// executed again during component re-renders
const promises = {}

/**
 * When you make a fetch request, and you want to cancel that request, this allows you to
 * cache the promise and provides an api for canceling the fetch promise
 *
 * @param {Promise} cancelable Premise-based resource whose value will be synchronously given
 * @param {string} uid Unique Id to avoid duplicate promises
 * @return {Array} [resource.promise, resource]
 */
const cancelableResource = (cancelable, uid) => {
  if (!uid) {
    throw new Error('Unique ID must be present for promise tracking')
  }

  // Check to see if the uid matches a request already in cache
  if (promises[uid]) {
    const resource = promises[uid]

    // If promise already exists
    return [resource.promise, resource]
  }

  // The promise is new or has changed.
  const resource = {
    promise: cancelable,
    // Allow cleanup to occur for component unmounts
    cleanup: () => {
      if (promises[uid]) {
        if (promises[uid].cancel) {
          promises[uid].cancel()
        }
        delete promises[uid]
      }
    },
    uid,
  }

  // Add promise to cache
  promises[uid] = resource
  // Make sure the correct reference is given to the cancel method
  promises[uid].cancel = cancelable.cancel

  // return new promise
  return [resource.promise, resource]
}

export default cancelableResource
