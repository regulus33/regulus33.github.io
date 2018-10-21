import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import anything from '../images/gatsby-icon.png'
import artThumb from '../images/paintings/ghost_lady.jpg'


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
  [artThumb, "paintings & drawings"]
]

const Work = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {
        images.map((x)=>{
          return <a href="/paintings"><div className={"project-card"} style={imageStyle(x[0])}>{x[1]}</div></a>
        })
      }
    </div>
  </Layout>
)

export default Work
