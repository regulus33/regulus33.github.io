import React from 'react'
import Layout from '../../components/layout'
import privateVoida from '../../images/paintings/privateVoida.png'
import privateVoidb from '../../images/paintings/privateVoidb.png'
import code from '../../images/paintings/codesample.png'
import PaintingsComponent from "../../components/paintings_component";

const PrivateVoid = () => (
    <PaintingsComponent image={[privateVoida, privateVoidb, code]} title={'Unity RPG'}>
        <p>An unfinished unity RPG.<br/>

            <a style={{color: "blue"}} href="https://github.com/regulus33/PrivateVoid" target="_blank">See the repo</a>
        </p>
    </PaintingsComponent>
)

export default PrivateVoid
