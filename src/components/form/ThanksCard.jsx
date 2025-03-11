import React from 'react'
import thanksImg from "../assets/thanksImg.svg"

const ThanksCard = () => {


    return (
        <div className='thanksConainer'>
            <img className='thanksImg' src={thanksImg} alt="thanksImg" />
            <div className='thankstitleContainer'>
                <span className='thanksSpan'>THANK YOU!</span>
                <p className='thanksP'>We’ve added your card details</p>

            </div>
        </div>
    )
}

export default ThanksCard