import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import backworks from '../images/paintings/backworks.png'
import BackButton from '../components/BackButton'

console.log(window.innerWidth)

const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}
const imageStyle = {
  width: window.innerWidth/2,
  height:"100%"
}

const BackWorks = () => (
  <Layout>
    <div className="projectContainer">
    <img className="projectImage" src={backworks}/>
      <div className="artTalk">
      <h3 style={headingStyle}>Backworks</h3>
      <p style={paragraphStyle}>
        From 2016 when I was making music as "Regulus", then published the album as Dawnsoon later that year. So that's three names you gotta keep track of... I know. But Parker Pink is the final 1.
      </p>
      <center><iframe src="https://open.spotify.com/embed/album/49xqEVVowVV7Vmpm1K7hbz" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></center>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default BackWorks
