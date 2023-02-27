import React from 'react'
import tonegarden from '../../images/tonegarden.png'
import PaintingsComponent from "../../components/paintings_component";

const ToneGarden = () => (
    <PaintingsComponent image={tonegarden} title={'ToneGarden'}>
        <p>A Ruby on Rails app using React for the frontend. You can create and save "binaural beats" and play them back
            whenever / wherever using your desktop or phone. The app uses the web audio api underneath and UI is mostly
            built on Material UI.</p>

        <a style={{color: "blue"}} href="https://github.com/regulus33/ToneGarden" target="_blank">See the repo</a>
</PaintingsComponent>
)

export default ToneGarden
