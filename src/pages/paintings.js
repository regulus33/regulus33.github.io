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
import light from '../images/paintings/light.png'
import us from '../images/paintings/us.png'
import god from '../images/paintings/god.jpg'


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
  // file, title, page
  [aries, "Aries","aries"],
  [taurus, "Taurus", "taurus"],
  [gemini, "Gemini", "gemini"],
  [cancer, "Cancer", "cancer"],
  [scorpio, "Scorpio", "scorpio"],
  [tiger_leap, "A huge mega doodle", "megadoodle"],
  [ghost_mirrors, "Mini Doodle", "minidoodle"],
  [lithograph_dream, "Beer", "beer"],
  [self_portrait, "Self Portrait", "self"],
  [silver_key, "Old Highschool Drawing", "silver"],
  // [site_logo, "paintings & drawings"],
  [anatomy, "Old Art School Relic", "anatomy"],
  [cacteyes, "Cacteyes (illustrated music)", "cacteyes"],
  [regulus_on_my_mind, "On My Mind, (illustrated music)", "onmymind"],
  [us, "Us (illustrated music)", "us"],
  [regulus_me, "Me, (illustrated music)","me"],
  [light, "Light (illustrated music)", "light"],
  [dreams, "Dreams, (illlustrated music)", "dreams"],
  [god, "God, (illlustrated music)", "god"],
]

const backStyles = {
  marginTop: 85,
  paddingLeft: 45,
  color: "black"
}

const Work = () => (
  <Layout>
    <span style={backStyles}><a href="javascript:window.history.back();">&#8636; back</a></span><center><h1 style={{color: "black"}}>Art</h1></center>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
      <div style={{width:10}}></div>
      {
        images.map((x)=>{
          return(
            <a href={`/${x[2]}`}>
            <div className={"project-card"} style={imageStyle(x[0])}>
            </div>
            <center id="paintingTitle">{x[1]}</center>
            </a>
          )})
      }
    <div style={{width:10}}></div>
    </div>
  </Layout>
)

export default Work
