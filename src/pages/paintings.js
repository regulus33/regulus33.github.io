import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import TopBar from '../components/TopBar'
import anatomy from '../images/paintings/anatomy.jpg'
import aries from '../images/paintings/aries.jpg'
import cacteyes from '../images/paintings/cacteyes.jpg'
import cancer from '../images/paintings/cancer.jpg'
import dreams from '../images/paintings/dreams.jpg'
import gemini from '../images/paintings/gemini.jpg'
import ghost_mirrors from '../images/paintings/ghost_mirrors.jpg'
import lithograph_dream from '../images/paintings/lithograph_dream.jpg'
import regulus_me from '../images/paintings/regulus_me.jpg'
import regulus_on_my_mind from '../images/paintings/regulus_on_my_mind.jpg'
import scorpio from '../images/paintings/scorpio.jpg'
import self_portrait from '../images/paintings/self_portrait.jpg'
import silver_key from '../images/paintings/silver_key.jpg'
import taurus from '../images/paintings/taurus.jpg'
import tiger_leap from '../images/paintings/tiger_leap.jpg'
import light from '../images/paintings/light.png'
import us from '../images/paintings/us.png'
import god from '../images/paintings/god.jpg'
import enterprise from '../images/paintings/enterprise.gif'
import bird from '../images/paintings/bird.png'
import sbr from '../images/paintings/sbrntsbr.png'

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
    // [bill_gates_and_chris, "paintings & drawings"],
    // file, title, page
    [sbr, "untitled", "untitled"],
    [bird, "Bird", "bird"],
    [enterprise, "EnterPrise", "enterprise"],
    [aries, "Aries", "aries"],
    [taurus, "Taurus", "taurus"],
    [gemini, "Gemini", "gemini"],
    [cancer, "Cancer", "cancer"],
    [scorpio, "Scorpio", "scorpio"],
    [tiger_leap, "A huge mega doodle", "megadoodle"],
    [ghost_mirrors, "Mini Doodle", "minidoodle"],
    [lithograph_dream, "Beer", "beer"],
    [self_portrait, "Self Portrait", "self"],
    [silver_key, "Old Highschool Drawing", "silver"],
    // [site_logo, "paintings & drawings"],
    [anatomy, "Old Art School Relic", "anatomy"],
    [cacteyes, "Cacteyes (illustrated music)", "cacteyes"],
    [regulus_on_my_mind, "On My Mind, (illustrated music)", "onmymind"],
    [us, "Us (illustrated music)", "us"],
    [regulus_me, "Me, (illustrated music)", "me"],
    [light, "Light (illustrated music)", "light"],
    [dreams, "Dreams, (illlustrated music)", "dreams"],
    [god, "God, (illlustrated music)", "god"],
]


const Paintings = () => (
    <Layout>
        <TopBar title={"Art"}/>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
            {
                images.map((x) => {
                    return (
                        <div>
                            <Link to={`/${x[2]}`}>
                                <div className={"project-card"} style={imageStyle(x[0])}>
                                </div>
                                <center id="paintingTitle">{x[1]}</center>
                            </Link>
                            <div></div>
                        </div>
                    )
                })
            }
            <div style={{width: 10}}></div>
        </div>
    </Layout>
)

export default Paintings
