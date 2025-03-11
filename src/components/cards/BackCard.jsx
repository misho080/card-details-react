import React from 'react'
import backSideCardImg from "../assets/secoundCard.svg"
import backSideCardLine from "../assets/backSideCardLine.svg"
import backSideCardBlackline from "../assets/backSideCardBlackline.svg"
import scanCode from "../assets/scanCode.svg"

const BackCard = ({children}) => {
    return ( 
        <div className='backSideCardContainer'>
            <img className='backSideCardImg' src={backSideCardImg} alt="backSideCardImg" />
            <img className='backSideCardLine' src={backSideCardLine} alt="backSideCardLine" />
            <span className='backSideCardCvvCode'>{children}</span>
            <img className='backSideCardBlackline' src={backSideCardBlackline} alt="backSideCardBlackline" />
            <img className='scanCode' src={scanCode} alt="scanCode" />
        </div>
    )
}

export default BackCard