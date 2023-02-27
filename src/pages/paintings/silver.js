import React from 'react'
import silver from '../../images/paintings/silver_key.jpg'
import PaintingsComponent from "../../components/paintings_component";

const Silver = () => (
    <PaintingsComponent image={silver} title={'Early ball point pen drawing'}>
        <p>Ballpoint pen drawing from ~2007</p>
    </PaintingsComponent>
)

export default Silver
