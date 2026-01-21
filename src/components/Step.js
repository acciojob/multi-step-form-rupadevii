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
        <form>
        {step===1 && (
            <div className='form'>
                <label htmlFor="first_name">First Name:</label>
                <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    id="first_name"/>
                <label htmlFor="last_name">Second Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.secondName}
                    onChange={handleChange}
                    id="last_name"/>
                <div>
                    <button onClick={() => setStep((prev) => prev + 1)}>
                        Next
                    </button>
                </div>
            </div>
        )}
        {step===2 && (
            <div className='form'>
                <label htmlFor="model">Model:</label>
                <input 
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    id="model"/>
                <label htmlFor="car_price">Car Price:</label>
                <input
                    type="number"
                    name="carPrice"
                    value={formData.carPrice}
                    onChange={handleChange}
                    id="car_price"/>
                <div>
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
                <label htmlFor="card_info">Credit Card Number:</label>
                <input 
                    type="number"
                    name="cardInfo"
                    value={formData.cardInfo}
                    onChange={handleChange}
                    id="card_info"/>
                <label htmlFor="expiry_date">Expiration Date:</label>
                <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    id="expiry_date"/>
                <div>
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
