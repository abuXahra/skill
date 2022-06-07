import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ buttonUrl, buttonText }) => {
    return (
        <Link to={buttonUrl} className="btn btn-warning shadow">{buttonText}</Link>
    )
}

export default Button