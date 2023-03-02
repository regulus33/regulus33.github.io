import React from 'react'
import self_portrait from '../../images/paintings/serpent.jpg'
import PaintingsComponent from "../../components/paintings_component";

const Serpent = () => (
    <PaintingsComponent image={self_portrait} title={'Serpent'}>
        <p>Ink</p>
    </PaintingsComponent>
)

export default Serpent
