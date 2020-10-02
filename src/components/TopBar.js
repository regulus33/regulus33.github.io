import React from 'react'


const backStyles = {
    // marginTop: 85,
    // paddingLeft: 45,
    // color: "black",
    // position: "fixed"
  }

const TopBar = ({title}) => {
   return (
    <div className="topbar">
        <a href="/work"><span id="logo" style={{color:"black", fontSize:"20px", fontWeight:"bold", position:"relative", top: 29, left: 29}}>Zachary Rowden</span></a>
        <span id="backButton" style={backStyles}><a className="backy" style={{cursor:"pointer"}} onClick={()=>window.history.back()}>&#8636; back</a></span><h1 style={{color: "black", textAlign:"center"}}>{title}</h1>
    </div>
   )
}

export default TopBar
