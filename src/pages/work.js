import React from 'react'
import Layout from '../components/layout'
import art from '../images/paintings/art.jpg'
import sound from '../images/paintings/sound.jpg'
import tech from '../images/paintings/tech.jpg'
import TopBar from '../components/TopBar';


// display: grid;
			// grid-template-columns: auto;
			// grids-template-rows: auto auto;

const Work = () => (
  <Layout>
    <div stlye={{marginTop: 40}}>
  <div style={{display: "grid", girdTemplateColumns: "auto auto", justifyContent: "center", gridGap: 100}}>
      <div> 
        <TopBar title={"things that i do"}/>
      </div>  
         <div>
            <a href="/sound"><img className="workLink invert" src={sound}/></a>
            <a href="/paintings"><img id="art" className="invert" src={art}/></a>
            <a href="/tech"><img className="workLink invert" src={tech}/></a>
          </div>
      </div>
      </div>
  </Layout>
)

export default Work
