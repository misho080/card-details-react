import React from 'react'

const CardName = ({onChange}) => {
    return (
        
        <div className='CardholderNameContainer'>
            <span className='CardholderNameSpan'>Cardholder Name</span>
            <input onChange={onChange} maxLength={20} className='CardholderNameInput' type="text" placeholder='e.g. Jane Appleseed' />
        </div>

    )
}

export default CardName