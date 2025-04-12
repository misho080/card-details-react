import React from 'react'

const DateAndCVV = ({onChange , MmOnchange,YyOnchange }) => {
    return (
        <div className='dateContainer'>
            <div className='MMYYContainer'>
                <span className='MMYYSpan'>Exp. Date (MM/YY)</span>
                <input  onChange={MmOnchange} maxLength={2} className='MMInput' type="" placeholder='MM' />
                <input onChange={YyOnchange} maxLength={2} className='YYInput' type="" placeholder='YY' />
            </div>

            <div className='CVCContainer'>
                <span className='CVCSpan'>CVC</span>
                <input onChange={onChange} maxLength={3} className='CVCInput' placeholder='e.g. 123' type="text" />
            </div>
        </div>
    )
}

export default DateAndCVV