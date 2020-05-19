import React from 'react'

function footer(props) {
    return (
        <div className="container">
            <hr></hr>
            <h3>
                Environment: {props.environment}
            </h3>
        </div>
    )
}

export default footer
