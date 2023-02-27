import React from 'react'
import beer from '../../images/paintings/elephant_print.jpg'
import PaintingsComponent from "../../components/paintings_component";

const Elephant = () => (
    <PaintingsComponent image={beer} title={'Elephant'}>
        <p>Lithographic print</p>
    </PaintingsComponent>
)

export default Elephant
