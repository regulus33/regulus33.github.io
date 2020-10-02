import React from 'react'
import Layout from '../components/layout'
import TopBar from '../components/TopBar'
import foundSouls from '../images/paintings/foundsouls.png'
import {Link} from 'gatsby'

const imageStyle = (src) => {
  return(
    {
      border: "20px solid white",
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
    [foundSouls, "Found Souls, a Unity audio visualizer", "foundsouls"],
]


const Tech = () => (
  <Layout>
    <TopBar title={"Tech"}/>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
      <div style={{width:10}}></div>
      {
        images.map((x)=>{
          return(
            <Link to={`/${x[2]}`}>
            <div className={"project-card"} style={imageStyle(x[0])}>
            </div>
            <center id="paintingTitle">{x[1]}</center>
      ]      </Link>
          )})
      }
    <div style={{width:10}}></div>
    </div>
  </Layout>
)

export default Tech
