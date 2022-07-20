import React from 'react'
import Carousel from 'react-elastic-carousel'
import Badge from './Badge'
import { badges } from '../badges.json'
import { useInView } from 'react-intersection-observer'
const Badges = () => {
  const { ref, inView } = useInView({
    threshold: 0.3
  })
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]
  return (
    <div ref={ref} className="badges-section" id="Badges">
      <div
        className={`heading-container-badges ${inView ? 'appear' : ''} fade-in`}
      >
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
        <Carousel
          className={`${inView ? 'appear' : ''} fade-in`}
          breakPoints={breakPoints}
        >
          {badges.map((badge, id) => (
            <Badge {...badge} key={id} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Badges
