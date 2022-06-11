import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Form = ({ passData, newsData }) => {
    const [inputData, setInputData] = useState(newsData || {
        fullname: '',
        email: '',
        phone: '',
        gender: '',
        subject: '',
        degree: '',
        range: '',
    })
    const [error, setError] = useState({
        fullname: '',
        email: '',
        phone: '',
        gender: '',
        subject: '',
        degree: '',
        range: '',
    });

    const navigatepage = useNavigate()

    const InputEvent = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        setInputData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const addItems = (e) => {
        e.preventDefault()



        if (inputData.fullname.length<4) {
            setError(() => ({
                fullname: 'please enter valid name'
            }))
            return;
        } else if (!inputData.email) {
            setError(() => ({
                email: 'email is required'
            }))
            return;
        } else if (inputData.phone.length !== 10) {
            setError(() => ({
                phone: 'please enter valid phone number'
            }))
            return;
        } else if (!inputData.gender) {
            setError(() => ({
                gender: 'gender is required'
            }))
            return;
        } else if (!inputData.subject) {
            setError(() => ({
                subject: 'subject is required'
            }))
            return;
        } else if (!inputData.degree) {
            setError(() => ({
                degree: 'degree is required'
            }))
            return;
        } else if (!inputData.range) {
            setError(() => ({
                range: 'range is required'
            }))
            return;
        }
        passData(inputData)
        navigatepage('/')
    }



    return (
        <>
            <div>
                <div className='container contact_div'>
                    <div className='row'>
                        <div className='col-md-6 col-10 mx-auto'>
                            <form className="needs-validation" onSubmit={addItems} >
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label" >Full Name</label>
                                    <input type="text" className="form-control" id='fullname'
                                        placeholder="Enter your name"
                                        name='fullname'
                                        value={inputData.fullname}
                                        onChange={InputEvent}

                                    />
                                    {!!error.fullname && (
                                        <div>
                                            <p style={{ color: 'red' }}>{error.fullname}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control"
                                        placeholder="Enter your email address"
                                        name='email'
                                        value={inputData.email}
                                        onChange={InputEvent}

                                    />
                                    {!!error.email && (
                                        <div>
                                            <p style={{ color: 'red' }}>{error.email}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                    <input type="number" className="form-control"
                                        placeholder="Enter your mobile number"
                                        name='phone'
                                        value={inputData.phone}
                                        onChange={InputEvent}

                                    />
                                    {!!error.phone && (
                                        <div>
                                            <p style={{ color: 'red' }}>{error.phone}</p>
                                        </div>
                                    )}
                                </div>

                                <label htmlFor="exampleFormControlInput1" className="form-label mb-2" id='gender'>Gender</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value='male' onChange={InputEvent} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value='female' onChange={InputEvent} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                                {!!error.gender && (
                                    <div>
                                        <p style={{ color: 'red' }}>{error.gender}</p>
                                    </div>
                                )}
                                <select className="form-select my-3"
                                    name='subject'
                                    value={inputData.subject}
                                    onChange={InputEvent}

                                >
                                    <option value='' disabled >Open this select menu</option>
                                    <option value='Subject1'>Subject1</option>
                                    <option value='Subject2'>Subject2</option>
                                    <option value='Subject3'>Subject3</option>
                                </select>
                                {!!error.subject && (
                                    <div>
                                        <p style={{ color: 'red' }}>{error.subject}</p>
                                    </div>
                                )}
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name='degree' value="BCA"
                                            onChange={InputEvent} />
                                        <label className="form-check-label" htmlFor="BCA">
                                            BCA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name='degree' value="BBA"
                                            onChange={InputEvent} />
                                        <label className="form-check-label" htmlFor="BBA">
                                            BBA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name='degree' value="B.com"
                                            onChange={InputEvent} />
                                        <label className="form-check-label" htmlFor="Bcom">
                                            B.com
                                        </label>
                                    </div>
                                    {!!error.degree && (
                                        <div>
                                            <p style={{ color: 'red' }}>{error.degree}</p>
                                        </div>
                                    )}
                                </div>
                                <label htmlFor="customRange1" className="form-label">Range</label>
                                <input type="range" className="form-range" id="customRange1"
                                    name='range'
                                    value={inputData.range}
                                    onChange={InputEvent}
                                    required
                                ></input>
                                {!!error.range && (
                                    <div>
                                        <p style={{ color: 'red' }}>{error.range}</p>
                                    </div>
                                )}
                                <div className="col-12 mt-5">
                                    <button className='btn btn-outline-primary' > submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Form;
