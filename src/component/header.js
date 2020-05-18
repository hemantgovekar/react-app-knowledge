import React from 'react'

const header = (prop) => {
    return (
        <div className="App-header">
            <h1> {  prop.name }</h1>           
            <hr/>
        </div >
    )
}

export default header
