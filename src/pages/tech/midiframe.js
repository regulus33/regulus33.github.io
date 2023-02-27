import React from 'react'
import midiframe from '../../images/midiframe.png'
import PaintingsComponent from "../../components/paintings_component";

const MidiFrame = () => (
    <PaintingsComponent image={midiframe} title={'MidiFrame'}>
        <p>A very complex rails app that uses chrome's midi api on the front end to essentially "play" video files the same way you'd play an audio file with a sampler. On the backend you can save midi mapping and chop the video up and restitch it (this is how you record a performance)</p>
        <p>Repo <a href={'https://github.com/regulus33/MidiFrame'}>here</a></p>
    </PaintingsComponent>
)

export default MidiFrame
