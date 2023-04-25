import React from 'react'
import './Lighting.css'
import cleanShaven from '../images/clean_shaven_makeup.png'
import stubble from '../images/stubble_makeup.png'
import trueToLife from '../images/true_to_life_firefighter.png'

const Makeup = () => {
  return (
    <div className="main_div">
        <div className="item_div">
          <div className="text_div">
              <h3>Clean-shaven:</h3>
              <p>John could be depicted as clean-shaven, indicating that he takes his job seriously and maintains a professional appearance.</p>
          </div>
          <div className="img_div">
              <img src={cleanShaven} className="img_wiz"></img>
          </div>
        </div>
        <div className="item_div">
          <div className="text_div">
              <h3>Stubble:</h3>
              <p>Alternatively, John could have a bit of stubble on his face, indicating that he may have been up early and rushed out the door to get to work on time.</p>
          </div>
          <div className="img_div">
              <img src={stubble} className="img_wiz"></img>
          </div>
        </div>
        <div className="item_div">
          <div className="text_div">
              <h3>True-to-Life Firefighter:</h3>
              <p>This makeup style aims to highlight the realistic aspects of being a firefighter, with every detail enhancing the authenticity of his portrayal. For John, this style could include makeup to mimic minor bruises, cuts, or burns acquired from previous fires, along with a hint of soot or dirt on his face to show that he's always ready to jump into action. The makeup would be subtle but powerful, showing John as the capable, devoted firefighter he is.</p>
          </div>
          <div className="img_div">
              <img src={trueToLife} className="img_wiz"></img>
          </div>
        </div>
    </div>
  )
}

export default Makeup