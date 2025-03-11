import React from 'react'

const DateAndCVV = ({onChange , MMOnchange,YYOnchange }) => {
    return (
        <div className='dateContainer'>
            <div className='MMYYContainer'>
                <span className='MMYYSpan'>Exp. Date (MM/YY)</span>

                <input onChange={MMOnchange} maxLength={2} className='MMInput' type="text" placeholder='MM' />
                <input onChange={YYOnchange} maxLength={2} className='YYInput' type="text" placeholder='YY' />
            </div>

            <div className='CVCContainer'>
                <span className='CVCSpan'>CVC</span>
                <input onChange={onChange} maxLength={3} className='CVCInput' placeholder='e.g. 123' type="text" />
            </div>
        </div>
    )
}

export default DateAndCVV