import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import anything from '../images/gatsby-icon.png'
import art from '../images/paintings/art.jpg'
import sound from '../images/paintings/sound.jpg'
import tech from '../images/paintings/tech.jpg'


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
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
          <div style={{display: 'flex'}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <a href="/paintings"><img className="workLink invert" src={sound}/></a>
              <a href="/paintings"><img className="workLink invert" src={tech}/></a>
            </div>
            <a href="/paintings"><img id="art" className="invert" src={art}/></a>
          </div>
    </div>
  </Layout>
)

export default Work
