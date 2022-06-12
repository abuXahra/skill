import React from 'react'

const Button = ({ buttonUrl, buttonText }) => {
    return (<div>
        <a href={buttonUrl} className="btn btn-warning shadow">{buttonText}</a>
    </div>

    )
}

export default Button