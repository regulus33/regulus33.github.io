import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Bird from '../images/paintings/bird.png'
import BackButton from '../components/BackButton'

const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}
const imageStyle = {
  //width: window.innerWidth/2,
  height:"100%"
}

const Silver = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src="https://s22658.pcdn.co/wp-content/uploads/2020/01/Tombstone-5th-Allen-St-with-Hugh-OBrian_scaled.jpg"/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Wyatt Earp</h3>
      <p style={paragraphStyle}>
        Wyatt Earp se narodil v Illinoi v roce 1848. Jeho táta byl kretén. Wyat byl třetí z pěti dětí.

        Přestěhoval se na divoký západ, kde potkal svou ženu, která zemřela nedlouho poté. 
        <br/>
        <img style={{maxWidth: '500px'}} src="https://upload.wikimedia.org/wikipedia/commons/8/82/Contention_Hotel_1880.jpg"/> 
        <br/>

        Přestěhoval se do Tombstonu v Arizoně. 

        Byl v konfliktu s kovboji. 

        Ti kovboji zabili jeho bratra. 
        
        Pomstil svého bratra tím, že brokovnicí zabil kovboje ! 

        Později se oženil s Josephine Sarah Marcusovou, se kterou cestoval po USA do konce jejich života.  

      </p>
      <img src="https://i.redd.it/ytfmfcfvrniz.jpg"/>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Silver

