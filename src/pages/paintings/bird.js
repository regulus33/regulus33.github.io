import React from 'react'
import bird from '../../images/paintings/bird.png'
import PaintingsComponent from "../../components/paintings_component";

const Bird = () => (
    <PaintingsComponent image={bird} title={'Bird'}>
        <p>Graphite and ink</p>
    </PaintingsComponent>

)

export default Bird
