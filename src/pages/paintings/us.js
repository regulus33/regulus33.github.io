import React from 'react'
import us from '../../images/paintings/us.png'
import PaintingsComponent from "../../components/paintings_component";

const Us = () => (
    <PaintingsComponent image={us} title={'Us'}>
        <center>
            <iframe width="100%"
                    height="300"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274407554&color=%23989898&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">

            </iframe>
        </center>
    </PaintingsComponent>
)

export default Us

