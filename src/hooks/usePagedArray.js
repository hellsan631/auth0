import { useState, useEffect, useCallback } from 'react'

function usePagedArray(memoizedFields, page) {
  console.log(page)
  const [pageArray, setPageArray] = useState([{ page }])

  // Minimizes the callback used to increment the page array
  const incrementPage = useCallback(() => {
    // Use the functional form of setState to avoid any outside data dependencies
    setPageArray((pages) => {
      const currentPageNumber = pages[pages.length - 1].page
      return [
        ...pages,
        { page: currentPageNumber + 1 },
      ]
    })
  }, [])

  useEffect(() => {
    if (pageArray.length > 1) {
      setPageArray([{ page }])
    }
  }, memoizedFields)

  return [pageArray, incrementPage]
}

export default usePagedArray
