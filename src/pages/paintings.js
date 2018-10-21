import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import anything from '../images/gatsby-icon.png'

import anatomy from '../images/paintings/anatomy.jpeg'
import aries from '../images/paintings/aries.jpg'

import bill_gates_and_chris from '../images/paintings/bill_gates_and_chris.jpg'
import cacteyes from '../images/paintings/cacteyes.jpg'
import cancer from '../images/paintings/cancer.jpg'
import dreams from '../images/paintings/dreams.jpg'
import gemini from '../images/paintings/gemini.jpg'
import ghost_mirrors from '../images/paintings/ghost_mirrors.jpeg'
import lithograph_dream from '../images/paintings/lithograph_dream.jpg'
import regulus_me from '../images/paintings/regulus_me.jpg'
import regulus_on_my_mind from '../images/paintings/regulus_on_my_mind.jpg'
import scorpio from '../images/paintings/scorpio.jpeg'
import self_portrait from '../images/paintings/self_portrait.jpeg'
import silver_key from '../images/paintings/silver_key.jpeg'
import site_logo from '../images/paintings/site_logo.jpeg'
import taurus from '../images/paintings/taurus.jpg'
import tiger_leap from '../images/paintings/tiger_leap.jpeg'


const imageStyle = (src) => {
  return(
    {
      backgroundImage: `url(${src})`,
      backgroundPosition:	'center',
      backgroundSize:	'cover',
      backgroundRepeat: 'no-repeat',
      width: "400px",
      height: "400px",
    }
  )
}

const images = [
  // [bill_gates_and_chris, "paintings & drawings"],
  [aries, "Aries"],
  [taurus, "Taurus"],
  [gemini, "gemini"],
  [cancer, "Cancer"],
  [scorpio, "paintings & drawings"],
  [dreams, "dreams"],
  [regulus_me, "me"],
  [regulus_on_my_mind, "on my mind"],
  [cacteyes, "Cacteyes"],
  [tiger_leap, "Abstract Tiger Ballpoint"],
  [ghost_mirrors, "Abstract Ballpoint"],
  [lithograph_dream, "Beer"],
  [self_portrait, "paintings & drawings"],
  [silver_key, "Old Highschool Drawing"],
  // [site_logo, "paintings & drawings"],
  [anatomy, "Old Art School Relic"],
]

const Work = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {
        images.map((x)=>{
          return <div className={"project-card"} style={imageStyle(x[0])}>{x[1]}</div>
        })
      }
    </div>
  </Layout>
)

export default Work
