import React from 'react'
import Button from './Button'

const CardComponent = ({ cardImg, cardTitle, cartBody, buttonText, buttonUr }) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card shadow mb-4">
                <img src={cardImg} className="imgwith shadow" alt="" srcset="" />
                <div className="card-body">
                    <h5 className='my-3'>{cardTitle}</h5>
                    <div className="underline"></div>
                    <p className='my-4'>{cartBody}</p>
                    <Button buttonText={buttonText} buttonUrl={buttonUr} />
                </div>
            </div>
        </div>
    )
}

export default CardComponent
