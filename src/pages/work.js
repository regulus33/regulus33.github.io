import React from 'react'
import Layout from '../components/layout'
import art from '../images/paintings/art.jpg'
import sound from '../images/paintings/sound.jpg'
import tech from '../images/paintings/tech.jpg'
import TopBar from '../components/TopBar';
import { Link } from 'gatsby';


// grids-template-rows: auto auto;

const Work = () => (
  <Layout>
    <div id="work" stlye={{ marginTop: 40 }}>
        <TopBar title={"Work"} />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center', alignItems: 'center' }}>
        <Link to="/tech"><img className="workLink invert" src={tech} />wdwdw</Link>
        <Link to="/paintings"><img className=" workLink invert" src={art} /></Link>
        <Link to="/sound"><img className="workLink invert" src={sound} /></Link>
      </div>
    </div>
  </Layout>
)

export default Work
