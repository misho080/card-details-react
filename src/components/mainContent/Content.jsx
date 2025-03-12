import React, { useState } from 'react'
import BackCard from '../cards/backCard'
import DateAndCVV from '../form/DateAndCVV'
import FrontCard from '../cards/FrontCard'
import CardName from '../form/CardName'
import CardNumber from '../form/CardNumber'
import ThanksCard from '../form/ThanksCard'
import Button from '../form/Button'

const Content = () => {

    const [CVC, setCVC] = useState("")
    const [month, setmonth] = useState("")
    const [year, setYear] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [confirm, setConfirm] = useState(false)


    return (
        <div className='mainContainer'>
            <div className='cardsContainer'>

                <BackCard>{CVC ? CVC : "000"}</BackCard>

                <FrontCard
                    month={month ? month : "00"}
                    year={year ? year : "00"}
                    cardName={name ? name : "Mariam mindiashvili"}
                    cardNumber={number ? number : "0000 0000 0000 0000"}
                />

            </div>

            {!confirm && (
                <div className='formContainer'>

                    <CardName onChange={(e) => setName(e.target.value)} />

                    <CardNumber
                        value={number.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()}
                        onChange={(e) => setNumber(e.target.value)}
                    />

                    <DateAndCVV
                        onChange={(e) => setCVC(e.target.value)}
                        MMOnchange={(e) => setmonth(e.target.value)}
                        YYOnchange={(e) => setYear(e.target.value)}
                    />
                    <Button className="ConfirmButton" onclick={() => setConfirm(true)}>Confirm</Button>

                </div>
            )}

            {confirm && (
                <div className='fullThanksContainer'>
                    <ThanksCard />
                    <Button className="ContinueButton" >Continue</Button>
                </div>
            )}

        </div>
    )
}

export default Content