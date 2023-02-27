import React from 'react'
import dreams from '../../images/paintings/dreams.jpg'
import PaintingsComponent from "../../components/paintings_component";

const Dreams = () => (
    <PaintingsComponent image={dreams} title={'Dreams'}>
        < center>
            < iframe
                width="50%"
                height="150"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265810004&color=%239388e3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">< /iframe>
        </center>
    </PaintingsComponent>

)

export default Dreams




