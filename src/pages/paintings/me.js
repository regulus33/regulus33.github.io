import React from 'react'
import me from '../../images/paintings/regulus_me.jpg'
import PaintingsComponent from "../../components/paintings_component";

const Me = () => (
    <PaintingsComponent image={me} title={'Me'}>
        < center>
            < iframe
                src="https://open.spotify.com/embed/track/3DZE0hwWZg6PvD2Vkyepzw"
                width="300"
                height="380"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media">< /iframe>
        </center>
    </PaintingsComponent>
)

export default Me













