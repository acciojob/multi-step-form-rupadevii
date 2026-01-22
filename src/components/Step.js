import React from 'react'

const Step = ({step, formData, setFormData, setStep, handleSubmit}) => {
  
    function handleChange(e){
        const {name, value} = e.target
        setFormData((prev) => {
            return{
                ...prev,
                [name]:value
            }
        })
    }
    
    return (
        <form id={`step${step}`}>
        {step===1 && (
            <div className='form'>
                <h1>Customer Details</h1>
                <label htmlFor="first_name">First Name:</label>
                <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    id="first_name"
                    required/>
                <label htmlFor="last_name">Second Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.secondName}
                    onChange={handleChange}
                    id="last_name"
                    required/>
                <div className='buttons'>
                    <button onClick={() => setStep((prev) => prev + 1)}>
                        Next
                    </button>
                </div>
            </div>
        )}
        {step===2 && (
            <div className='form'>
                <h1>Car Details</h1>
                <label htmlFor="model">Model:</label>
                <input 
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    id="model"
                    required/>
                <label htmlFor="car_price">Car Price:</label>
                <input
                    type="number"
                    name="carPrice"
                    value={formData.carPrice}
                    onChange={handleChange}
                    id="car_price"
                    required/>
                <div className='buttons'>
                    <button onClick={() => setStep((prev) => prev - 1)}>
                        Previous
                    </button>
                    <button onClick={() => setStep((prev) => prev + 1)}>
                        Next
                    </button>
                </div>
            </div>
        )}
        {step===3 && (
            <div className='form'>
                <h1>Payment Details</h1>
                <label htmlFor="card_info">Credit Card Number:</label>
                <input 
                    type="number"
                    name="cardInfo"
                    value={formData.cardInfo}
                    onChange={handleChange}
                    id="card_info"
                    required/>
                <label htmlFor="expiry_date">Expiration Date:</label>
                <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    id="expiry_date"
                    required/>
                <div className='buttons'>
                    <button onClick={() => setStep((prev) => prev - 1)}>
                        Previous
                    </button>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        )}
        </form>
    
    )
}

export default Step
