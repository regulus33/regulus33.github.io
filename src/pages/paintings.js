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
import beer from '../images/paintings/beer.jpg'
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
import elephant from '../images/paintings/elephant_print.jpg'
import plangeneva from '../images/paintings/plangeneva.jpg'
import endofline from '../images/paintings/endofline.jpg'
import serpent from '../images/paintings/serpent.jpg'

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

    [sbr, "Untitled", "untitled"],
    [scorpio, "Scorpio", "scorpio"],
    [endofline, "End of line", "endofline"],
    [serpent, "Serpent", "serpent"],
    [plangeneva, "Plangeneva", "plangeneva"],
    [elephant, "elephant", "elephant"],
    [taurus, "Taurus", "taurus"],
    [tiger_leap, "A huge mega doodle", "megadoodle"],
    [beer, "Beer", "beer"],
    [bird, "Bird", "bird"],
    [enterprise, "EnterPrise", "enterprise"],
    [aries, "Aries", "aries"],
    [gemini, "Gemini", "gemini"],
    [ghost_mirrors, "Mini Doodle", "minidoodle"],
    [cancer, "Cancer", "cancer"],
    [self_portrait, "Self Portrait", "self"],
    [silver_key, "Old Highschool Drawing", "silver"],
    [anatomy, "Old Art School Relic", "anatomy"],
    [cacteyes, "Cacteyes (illustrated sound)", "cacteyes"],
    [regulus_on_my_mind, "On My Mind, (illustrated sound)", "onmymind"],
    [us, "Us (illustrated sound)", "us"],
    [regulus_me, "Me, (illustrated sound)", "me"],
    [light, "Light (illustrated sound)", "light"],
    [dreams, "Dreams, (illlustrated sound)", "dreams"],
    [god, "God, (illlustrated sound)", "god"],
]
// ].sort((a, b) => {
//     if (a[2][0] < b[2][0]) {
//         return -1;
//     }
//     if (a[2][0] > b[2][0]) {
//         return 1;
//     }
//     return 0;
// });


const Paintings = () => (
    <Layout>
        <div className={'spacer'}></div>
        <TopBar title={"Art"}/>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
            {
                images.map((x) => {
                    return (
                        <div>
                            <Link to={`/paintings/${x[2]}`}>
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
