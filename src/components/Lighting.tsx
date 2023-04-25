import React from 'react'
import './Lighting.css'
import blueLighting from '../images/blue_lighting.png'
import harshLighting from '../images/harsh_lighting.png'
import dawnTwilight from '../images/dawn_twilight_lighting.png'

const Lighting = () => {
  return (
    <div className="main_div">
        <div className="item_div">
          <div className="text_div">
              <h3>Blue lighting:</h3>
              <p>Blue lighting could be used to create a cool and calming atmosphere, emphasizing the sense of routine and repetition in John's daily life as he heads off to work. This would create a calming, soothing feel to the scene.</p>
          </div>
          <div className="img_div">
              <img src={blueLighting} className="img_wiz"></img>
          </div>
        </div>
        <div className="item_div">
          <div className="text_div">
              <h3>Harsh lighting:</h3>
              <p>Alternatively, harsh lighting could be used to create a sense of urgency and danger, emphasizing the importance of John's job as a firefighter. This would create a high-stakes, dramatic feel to the scene.</p>
          </div>
          <div className="img_div">
              <img src={harshLighting} className="img_wiz"></img>
          </div>
        </div>
        <div className="item_div">
          <div className="text_div">
              <h3>Dawn twilight:</h3>
              <p>The scene can take place during the early dawn hours, with a mix of cool blue and warm orange tones, representing the transition between night and day. This lighting can show John's dedication to his job as a firefighter, waking up early to serve his community.</p>
          </div>
          <div className="img_div">
              <img src={dawnTwilight} className="img_wiz"></img>
          </div>
        </div>
    </div>
  )
}

export default Lighting