import React from 'react'
import './Lighting.css'
import smokeAndFlames from '../images/smokenflames_vfx.png'
import droneShots from '../images/drone_shots_vfx.png'
import lightAndColour from '../images/light_colour_vfx.png'

const VisualEffects = () => {
  return (
    <div className="main_div">
        <div className="item_div">
          <div className="text_div">
              <h3>Smoke and flames:</h3>
              <p>To emphasize the danger and urgency of John's job as a firefighter, the scene could feature smoke and flames in the background or as part of the transition to the fire station. This would give the audience a sense of the risks involved in John's work.</p>
          </div>
          <div className="img_div">
              <img src={smokeAndFlames} className="img_wiz"></img>
          </div>
        </div>
        <div className="item_div">
          <div className="text_div">
              <h3>Drone shots:</h3>
              <p>A drone could be used to capture aerial shots of John as he exits his home and makes his way to the fire station, giving the audience a unique perspective and creating a sense of scope and grandeur.</p>
          </div>
          <div className="img_div">
              <img src={droneShots} className="img_wiz"></img>
          </div>
        </div>
        <div className="item_div">
          <div className="text_div">
              <h3>Light and color effects:</h3>
              <p>To create a visual theme for the movie, the scene could be enhanced with specific lighting and color effects. For example, the colors of the sunrise or sunset could be used to create a warm, inviting atmosphere, or harsh, red and orange colors could be used to emphasize the danger of the job.</p>
          </div>
          <div className="img_div">
              <img src={lightAndColour} className="img_wiz"></img>
          </div>
        </div>
    </div>
  )
}

export default VisualEffects