import React, { useState } from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultsTable from './components/ResultsTable';

function App() {

    const [results, setResults] = useState(null);
    const [initialInvestment, setInitialInvestment] = useState(0);

    const handleCalculate = (currentSavings, yearlyContribution, expectedReturn, duration) => {
        const yearlyData = [];

        if (currentSavings !== 0 && yearlyContribution !== 0 && expectedReturn !== 0 && duration !== 0) {
            setInitialInvestment(currentSavings);
            let expectedReturnHolder = expectedReturn / 100;
            for (let i = 0; i < duration; i++) {
                let yearlyInterest = currentSavings * expectedReturnHolder;
                currentSavings += yearlyInterest + yearlyContribution;
                yearlyData.push({
                    year: i + 1,
                    yearlyInterest: yearlyInterest,
                    savingsEndOfYear: currentSavings,
                    yearlyContribution: yearlyContribution,
                });
            }
            setResults(yearlyData);
        };
    };

    return (
        <div>
            <Header/>
            <InputForm
                handleCalculate={handleCalculate}
                setResults={setResults}
            />
            {results !== null ? (
                <ResultsTable
                    results={results}
                    initialInvestment={initialInvestment}
                />
            ) : (
                <h5 style={{ textAlign: 'center' }}>No investment calculated yet.</h5>
            )}
        </div>
    );
};

export default App;
