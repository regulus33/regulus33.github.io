import React from 'react'

console.log(window.innerWidth)

const backStyles = {
    marginTop: 85,
    paddingLeft: 45,
    color: "black"
  }

const TopBar = ({title}) => {
   return (
    <div>
        <span style={backStyles}><a href="javascript:window.history.back();">&#8636; back</a></span><center><h1 style={{color: "black"}}>{title}</h1></center>
    </div>
   )
}

export default TopBar
