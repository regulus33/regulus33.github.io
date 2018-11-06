import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import TopBar from '../components/TopBar'

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
    [<iframe width="560" height="315" src="https://www.youtube.com/embed/OZMFAXGWWDU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>],
    [<iframe width="560" height="315" src="https://www.youtube.com/embed/lFxuvBwqqRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>],
    [<iframe width="560" height="315" src="https://www.youtube.com/embed/UD_F2BgNPxk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>],
    [<iframe width="560" height="315" src="https://www.youtube.com/embed/YEj3C4NpkTw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>],
]


const Videos = () => (
  <Layout>
    <TopBar title={"Sound"}/>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
      <div style={{width:"100%"}}></div>
      {
        images.map((x)=>{
          return(
            <div>
             {x[0]}
            </div>
          )})
      }
    <div style={{width:"100%"}}></div>
    </div>
  </Layout>
)

export default Videos