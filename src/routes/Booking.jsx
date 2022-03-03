import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Booking = () => {

    const today = new Date().toISOString().split("T")[0];
    console.log(today);

    const timePlusOneHour = (new Date().getHours() + 1) + ":" + new Date().getMinutes()
    console.log(timePlusOneHour);

    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [seats, setSeats] = useState(1)


    const [showSubmit, setShowSubmit] = useState(false)

    const submit = () => {
        if (email.includes("@") && ((date === today && timePlusOneHour < time) || date !== today)) {
            setShowSubmit(true)
        }
        // if ((email.includes("@") && email.includes(".")) && ((date === today && timePlusOneHour < time) || date !== today)) {
        //     setShowSubmit(true)
        // }
    }

    return (
        <div id='booking'>
            {showSubmit ?

                <div>
                    <div id='confirm'>
                        <h4>Your booking is confirmed as below:</h4>
                        <p>Contact: <br /> {email}</p>
                        <p>Date: {date}</p>
                        <p>Time: {time}</p>
                        <p>Guests: {seats}</p>
                        <Link className='fancy-btn' to="/">Confirm</Link>
                        <button className='fancy-btn' onClick={() => setShowSubmit(false)}>Go back</button>
                    </div>
                </div>

                :

                <form onSubmit={submit}>

                    <label for="email">Enter your email:</label>
                    <input type="email" required placeholder="email..." onChange={(e) => setEmail(e.target.value)} id="email" name="email" value={email} />
                    {/* <input onClick={() => setEmail("")} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" value={email} /> */}

                    <label for="date">Date:</label>
                    <input type="date" required onChange={(e) => setDate(e.target.value)} min={today} id="dt" value={date} name="date" />

                    <label for="time">Select a time:</label>
                    <input type="time" required onChange={(e) => setTime(e.target.value)} value={time} min={timePlusOneHour} id="time" name="time" />

                    <label for="seats">Guest number:</label>
                    <select onChange={(e) => setSeats(e.target.value)} name="seats" id="seats" value={seats}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    {/* <button className='fancy-btn' onClick={submit}>Send</button> */}
                    {/* <input className='fancy-btn' type="submit" onClick={submit} value='Send' /> */}
                    <button className='fancy-btn'>Send</button>

                </form>
            }
        </div >
    )
}

export default Booking