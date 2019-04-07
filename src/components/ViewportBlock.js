import React, { useState } from 'react'
import TrackVisibility from 'react-on-screen'

function Block({ isVisible, onVisable }) {
  const [hasBeenVisable, setHasBeenVisible] = useState(false)

  if (!hasBeenVisable && isVisible) {
    setHasBeenVisible(true)
    onVisable()
  }

  return (
    <div style={{ height: '1px', width: '1px' }}></div>
  )
}

export default function ViewportBlock({ onVisable = () => {} }) {
  return (
    <div className="twelve columns">
      <TrackVisibility once>
        <Block
          onVisable={onVisable}
        />
      </TrackVisibility>
    </div>
  )
}
