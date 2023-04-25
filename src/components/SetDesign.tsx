import React from 'react'
import './Lighting.css'
import suburban from '../images/suburban_set.png'
import dtApt from '../images/dt_apt_set.png'
import coastalVillage from '../images/coastal_village_set.png'

const SetDesign = () => {
  return (
    <div className="main_div">
        <div className="item_div">
          <div className="text_div">
              <h3>Suburban Neighborhood Set:</h3>
              <p>The scene is set in a peaceful suburban neighborhood with tree-lined streets and well-manicured lawns. John's house is a modest, one-story ranch-style home with a neatly landscaped front yard. As John exits the front door, he waves to his neighbors and picks up the daily newspaper from his front porch. The camera follows him as he gets into his firefighter's SUV parked in the driveway, turns on his flashing lights, and drives away, heading towards the fire station.</p>
          </div>
          <div className="img_div">
              <img src={suburban} className="img_wiz"></img>
          </div>
        </div>
        <div className="item_div">
          <div className="text_div">
              <h3>Downtown Apartment Set:</h3>
              <p>John lives in a charming multi-story brick apartment building situated in a bustling downtown area. The scene starts with John stepping out of his building's front entrance onto the busy sidewalk, greeted by the sounds of car horns and pedestrians chatting. He squeezes past a group of people waiting at a bus stop, gives a friendly nod to the local coffee shop owner, and then unlocks his parked firefighter's SUV to head to the fire station.</p>
          </div>
          <div className="img_div">
              <img src={dtApt} className="img_wiz"></img>
          </div>
        </div>
        <div className="item_div">
          <div className="text_div">
              <h3>Coastal Village Set:</h3>
              <p>John lives in a cozy cottage by the sea, surrounded by other small, colorful homes in a tight-knit coastal village. The scene begins with a shot of the sun rising over the ocean, setting the backdrop for the day ahead. As John exits his home, he breathes in the fresh ocean air and greets a group of fishermen passing by with their catch of the day. He jumps into his firefighter's SUV adorned with surfboards on the roof and drives off, with the fire station located just a short distance away along the picturesque coastline.</p>
          </div>
          <div className="img_div">
              <img src={coastalVillage} className="img_wiz"></img>
          </div>
        </div>
    </div>
  )
}

export default SetDesign