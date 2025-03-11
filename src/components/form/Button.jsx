import React from 'react'

const Button = ({children,onclick , className}) => {
    return (
        <div >
            <button className={className} onClick={onclick} >{children}</button>
        </div>
    )
}

export default Button