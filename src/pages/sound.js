import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import TopBar from '../components/TopBar'
import pillowman from '../images/paintings/pillowman.jpg'
import backworks from '../images/paintings/backworks.png'
import quit from '../images/paintings/quit.jpg'
import videos from '../images/paintings/videos.jpg'

const imageStyle = (src) => {
    return (
        {
            border: "20px solid white",
            backgroundImage: `url(${src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "400px",
            height: "400px",
        }
    )
}

const images = [
    [pillowman, "Pillow Man", "pillowman"],
    [backworks, "Backworks (old)", "backworks"],
    [quit, "Quit (old)", "quit"],
    [videos, "Music Videos", "videos"]
]


const Sound = () => (
    <Layout>
        <TopBar title={"Sound"}/>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
            <div style={{width: 10}}></div>
            {
                images.map((x) => {
                    return (
                        <Link to={`/${x[2]}`}>
                            <div className={"project-card"} style={imageStyle(x[0])}>
                            </div>
                            <center id="paintingTitle">{x[1]}</center>
                        </Link>
                    )
                })
            }
            <div style={{width: 10}}></div>
        </div>
    </Layout>
)

export default Sound
