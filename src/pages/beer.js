import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import beer from '../images/paintings/lithograph_dream.jpg'

const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}



const Beer = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={{width: window.innerWidth/2, height:"100%"}}  src={beer}/>
    <div className="artTalk">
      <h3 style={headingStyle}>Beer</h3>
      <p style={paragraphStyle}>
        I can't find the original scan of this one. A good friend bought a print and sent me this picture. Limestone block lithograph, the piece had something to do with nightmares and sleeping shortly after drinking beer.
      </p>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default Beer
