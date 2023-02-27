import React from 'react'
import self_portrait from '../../images/paintings/self_portrait.jpg'
import PaintingsComponent from "../../components/paintings_component";

const Self = () => (
    <PaintingsComponent image={self_portrait} title={'Self portrait'}>
        <p>Lithographic print</p>
    </PaintingsComponent>
)

export default Self
