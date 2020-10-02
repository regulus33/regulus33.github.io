import React from 'react'

const BackButton = () => {
   return ( 
    <center><a onClick={() => window.history.back()}>&#8636; back</a></center>
   )
}

export default BackButton
