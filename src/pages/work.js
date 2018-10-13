import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import anything from '../images/gatsby-icon.png'

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
  anything,
  anything,
  anything,
  anything,
  anything,
  anything,
  anything,
  anything,
  anything,
]

const Work = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {
        images.map((x)=>{
          return <div className={"project-card"} style={imageStyle(anything)}>Pillow Man</div>
        })
      }
    </div>
  </Layout>
)

export default Work
