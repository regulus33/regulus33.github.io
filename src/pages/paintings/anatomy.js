import React from 'react'
import anatomy from '../../images/paintings/anatomy.jpg'
import PaintingsComponent from "../../components/paintings_component";

const Anatomy = () => (
   <PaintingsComponent image={anatomy} title={'anatomy'}>
       <p>Nothing like a skinless face to learn you some anatomy</p>
   </PaintingsComponent>

)

export default Anatomy
