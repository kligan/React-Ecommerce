
import React, {useEffect, useRef} from 'react'
import Parallax from 'parallax-js' 

function Default() {
  const scene = useRef(null);

  useEffect(() => {
     new Parallax(scene.current, {
      // relativeInput: true,
    })
  })

  return (
    <div ref={scene} >
    <div data-depth="0.2">My first Layer!</div>
    <div data-depth="0.6">My second Layer!</div>
  </div>
  )
}

export default Default
