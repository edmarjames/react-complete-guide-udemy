import React from 'react'

export default function InputForm({
    currentSavings,
    setCurrentSavings,
    yearlyContribution,
    setYearlyContribution,
    expectedReturn,
    setExpectedReturn,
    duration,
    setDuration,
    handleReset,
    handleCalculate
}) {

    const handleSetExpectedInterest = (e) => {
        const value = e.target.value;
        setExpectedReturn(value / 100);
    };
    

    return (
        <form className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input 
                        type="number" 
                        id="current-savings" 
                        onChange={(e) => setCurrentSavings(e.target.value)}    
                        value={currentSavings}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input 
                        type="number" 
                        id="yearly-contribution" 
                        onChange={(e) => setYearlyContribution(e.target.value)}    
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
                        onChange={(e) => setDuration(e.target.value)} 
                        value={duration}
                    />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={handleReset}>
                    Reset
                </button>
                <button type="submit" className="button" onClick={handleCalculate}>
                    Calculate
                </button>
            </p>
      </form>
    );
};
