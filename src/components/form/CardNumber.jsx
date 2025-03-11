import React from 'react'

const CardNumber = ({onChange,value}) => {
    return (
        <div className='CardNumberContainer'>
            <span className='CardNumberSpan'>Card Number</span>
            <input value={value} onChange={onChange} maxLength={19} className='CardNumberInput' placeholder='e.g. 1234 5678 9123 0000' type="text" />
        </div>
    )
}

export default CardNumber