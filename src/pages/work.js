import React from 'react'
import { Link } from 'gatsby'
import anything from '../images/gatsby-icon.png'
import Layout from '../components/layout'
import art from '../images/paintings/art.jpg'
import sound from '../images/paintings/sound.jpg'
import tech from '../images/paintings/tech.jpg'
import TopBar from '../components/TopBar';


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

// const images = [
//   [art, "paintings & drawings"]
//   [audio, "paintings & drawings"]
//   [tech, "paintings & drawings"]
// ]

const Work = () => (
  <Layout>
  <TopBar title={""}/>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
          <div style={{display: 'flex'}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <a href="/sound"><img className="workLink invert" src={sound}/></a>
              <a href="/paintings"><img className="workLink invert" src={tech}/></a>
            </div>
            <a href="/paintings"><img id="art" className="invert" src={art}/></a>
          </div>
    </div>
  </Layout>
)

export default Work
