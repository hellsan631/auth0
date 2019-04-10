import React, { Fragment, useState, memo } from 'react'
import ViewportBlock from './ViewportBlock'
import Button from './Button'

function InfiniteLoader({ onScrollFire }) {
  const [hasFired, setHasFired] = useState(false)

  const onVisable = () => {
    setHasFired(true)
    onScrollFire()
  }

  return (
    <Fragment>
      {
        !hasFired &&
        <div className="twelve columns">
          <Button
            onClick={onVisable}
            primary
          >
            Load More
          </Button>
        </div>
      }
      <ViewportBlock
        onVisable={onVisable}
      />
    </Fragment>
  )
}

export default memo(InfiniteLoader)
