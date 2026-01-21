import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="main">
      <Step step={step} formData={formData} setFormData={setFormData} setStep={setStep} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default App
