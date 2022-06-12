import Button from './Button'
import React from 'react'

function TextComponent({ titleofText, paragraphText, buttonText, buttonUr }) {
    return (
        <div className="col-md-4 pb-2">
            <h6>{titleofText}</h6>
            <p>{paragraphText}</p>

            <Button buttonText={buttonText} buttonUrl={buttonUr} />
        </div>

    )
}
export default TextComponent
