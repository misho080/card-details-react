import React from 'react'
import oval from "../assets/Oval.svg"
import frontSideCardImg from "../assets/firstCard.svg"
import smallOval from "../assets/smallOval.svg"

const FrontCard = ({month , year,cardNumber, cardName}) => {
    return (
        <div className='forntSideCardContainer'>
            <img className='frontSideCardImg' src={frontSideCardImg} alt="frontSideCardimg" />
            <img className='frontSideCardOval' src={oval} alt="oval" />
            <img className='frontSideCardSmallOval' src={smallOval} alt="" />
            <span className='frontSideCardCvvCode'>{cardNumber}</span>
            <div className='nameDateContainetr'>
                <span className='frontSideCardName'>{cardName}</span>
                <div className='frontSideDateContainer'>
                    <span>{month}</span>
                    <span>/</span>
                    <span>{year}</span>
                </div>
            </div>
        </div>
    )
}

export default FrontCard