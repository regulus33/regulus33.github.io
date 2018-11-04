import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import god from '../images/paintings/god.jpg'

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

const God = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={imageStyle}  src={god}/>
      <div className="artTalk">
      <h3 style={headingStyle}>God</h3>
      <p style={paragraphStyle}>
       God
       <br/>
       I see you in the stones
       <br/>
       God
       <br/>
       Do you think I can be alone?
       <br/>
       God
       <br/> 
       I'm sinning every night
       <br/>
       Some forgiveness would be nice
       <br/>
       So I can see you in the sky.
       <br/>
       God 
       <br/>
       Is there a point to all this drive?
       <br/>
       Or should be just yearn to survive 
       <br/>
       And make our way home
      </p>
     <center><iframe width="90%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274414593&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></center>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default God
