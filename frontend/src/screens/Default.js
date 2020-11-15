
import React, {useEffect, useRef} from 'react'
import Parallax from 'parallax-js' 
// import '../styling/HomeParallax'
// import './DefaultPage.css'
import '../styling/HomeParallax.css'

function Default() {
  const scene = useRef(null);

  useEffect(() => {
     new Parallax(scene.current, {
      // relativeInput: true,
    })
  })

  return (
    <div ref={scene} >
    <div data-depth="0.2"><img src="images/chile1.png" className="chile"></img></div>
    <div data-depth="0.6">My second Layer!</div>

           <ul>
            <li data-depth="0.3"><img src="images/chile1.png" className="chile"></img></li>
            <li data-depth="0.8"><img src="images/cab3.png" className="cab"></img></li>
            <li data-depth="0.3"><img src="images/cab3blur.png" className="cab3blur"></img></li>
            <li data-depth="0.4"><img src="images/bell.png" className="bell"></img></li>
            <li data-depth="0.9"><img src="images/tomato.png" className="tomato"></img></li>
            <li data-depth="0.7"><img src="images/orange.png" className="orange"></img></li>
            <li data-depth="1.5"><img src="images/leafnew.png" className="leafnew"></img></li>
            <li data-depth="1.5"><img src="images/leafnew.png" className="leafnew1"></img></li>
            <li data-depth="1.5"><img src="images/leafnew.png" className="leafnew2"></img></li>
            <li data-depth="1.5"><img src="images/leafnew.png" className="leafnew3"></img></li>
            <li data-depth="0.3"><img src="images/bell.png" className="bell1"></img></li>
            <li data-depth="0.9"><img src="images/tomato.png" className="tomato1"></img></li>
            <li data-depth="0.9"><img src="images/tomato.png" className="tomato2"></img></li>
            <li data-depth="0.5"><img src="images/chilleg.png" className="chilleg"></img></li>
            <li data-depth="0.5"><img src="images/chilleg.png" className="chilleg1"></img></li>
            <li data-depth="0.2"><img src="images/chilleg.png" className="chilleg2"></img></li>
            <li data-depth="0.2"><img src="images/leafnew.png" className="leafnew4"></img></li>
            <li data-depth="0.2"><img src="images/leafnew.png" className="leafnew5"></img></li>
            </ul>
  </div>
  )
}

export default Default
