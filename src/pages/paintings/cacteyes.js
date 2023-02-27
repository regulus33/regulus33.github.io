import React from 'react'
import cacteyes from '../../images/paintings/cacteyes.jpg'
import PaintingsComponent from "../../components/paintings_component";

const Cacteyes = () => (
    <PaintingsComponent image={cacteyes} title={'Cacteyes'}>
        < center>
            < iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/267303979&color=%23c8b0b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">< /iframe>
        </center>
    </PaintingsComponent>

)

export default Cacteyes


