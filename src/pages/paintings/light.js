import React from 'react'
import light from '../../images/paintings/light.png'
import PaintingsComponent from "../../components/paintings_component";

const Light = () => (
    <PaintingsComponent image={light} title={'Light'}>
        <center>
            <iframe width="50%"
                    height="150"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/264489231&color=%238bab5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
        </center>


    </PaintingsComponent>

)

export default Light










