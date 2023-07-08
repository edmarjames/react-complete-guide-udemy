import React, { useState } from 'react';

export default function InputForm({
    handleCalculate,
    setResults
}) {

    const [currentSavings, setCurrentSavings] = useState(0);
    const [yearlyContribution, setYearlyContribution] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleReset = () => {
        setCurrentSavings(0);
        setYearlyContribution(0);
        setExpectedReturn(0);
        setDuration(0);
        setResults(null);
    };
    const handleSetExpectedInterest = (e) => {
        const value = e.target.value;
        setExpectedReturn(+value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCalculate(currentSavings, yearlyContribution, expectedReturn, duration);
    };
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input 
                        type="number" 
                        id="current-savings" 
                        onChange={(e) => setCurrentSavings(+e.target.value)}    
                        value={currentSavings}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input 
                        type="number" 
                        id="yearly-contribution" 
                        onChange={(e) => setYearlyContribution(+e.target.value)}    
                        value={yearlyContribution}                    
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input 
                        type="number" 
                        id="expected-return" 
                        onChange={handleSetExpectedInterest}
                        value={expectedReturn}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input 
                        type="number" 
                        id="duration" 
                        onChange={(e) => setDuration(+e.target.value)} 
                        value={duration}
                    />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={handleReset}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
      </form>
    );
};
