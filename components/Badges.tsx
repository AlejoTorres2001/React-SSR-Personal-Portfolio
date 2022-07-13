import React from 'react'
import Carousel from 'react-elastic-carousel'
import Badge from './Badge'
import { badges } from '../badges.json'
const Badges = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]
  return (
    <div className="badges-section">
      <div className="heading-container-badges">
        <div className="screen-heading">
          <span>Badges</span>
        </div>
        <div className="screen-sub-heading">
          <span>Workshops Hackathons and Challenges</span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>

      <div className="badges-container">
{/* @ts-ignore */}
<Carousel breakPoints={breakPoints}>
      {badges.map((badge, id) => <Badge {...badge} key={id}/>)}
        </Carousel>
      </div>
    </div>
  )
}

export default Badges
