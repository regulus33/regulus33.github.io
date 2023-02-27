import React from 'react'
import Layout from './layout'

const PaintingsComponent = ({children, image, title}) => {
    const images = () => {
        console.log(typeof (image))
        if (image.map != undefined) {
            console.log(typeof (image))
            return image.map((src) => {
                return (<img className="projectImage" src={src}/>)
            })
        } else {
            return (<img className="projectImage" src={image}/>)
        }
    }
    return (
        <Layout>
            <div className="projectContainer">
                <div style={{flexDirection: 'column', display: 'flex'}}>
                    {images()}
                </div>
            <div className="artTalk">
                <h3>{title}</h3>
                <p>
                    {children}
                </p>

            </div>
        </div>
</Layout>
)

}

export default PaintingsComponent
