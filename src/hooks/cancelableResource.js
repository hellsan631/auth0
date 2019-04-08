// Caches for all of the premises, so they don't have to be
// executed again during component re-renders
const promises = {}

/**
 * Throws is a promise for React Suspense to catch.
 * When that promise results, returns the value to use synchronously
 *
 * @param {Promise} cancelable Premise-based resource whose value will be synchronously given
 * @param {string} uid Unique Id to avoid duplicate promises
 * @return {Array} [resource.value, resource]
 */
const cancelableResource = (cancelable, uid) => {
  if (!uid) {
    throw new Error('Unique ID must be present for promise tracking')
  }

  // Check to see if the uid matches a request already in cache
  if (promises[uid]) {
    const resource = promises[uid]

    // If nothing has changed.
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
  promises[uid].cancel = cancelable.cancel

  // Throw new promise
  return [resource.promise, resource]
}

export default cancelableResource
