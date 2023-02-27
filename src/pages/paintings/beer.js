import React from 'react'
import beer from '../../images/paintings/beer.jpg'
import PaintingsComponent from "../../components/paintings_component";

const Beer = () => (
    <PaintingsComponent image={beer} title={'Beer'}>
        <p>Lithographic print</p>
    </PaintingsComponent>

)

export default Beer
