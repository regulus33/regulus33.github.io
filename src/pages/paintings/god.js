import React from 'react'
import god from '../../images/paintings/god.jpg'
import PaintingsComponent from "../../components/paintings_component";

const God = () => (
    <PaintingsComponent image={god} title={'God'}>
        <center>
            <iframe width="90%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274414593&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </center>
    </PaintingsComponent>

)

export default God







