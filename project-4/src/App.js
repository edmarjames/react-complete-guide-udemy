import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultsTable from './components/ResultsTable';

function App() {

    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlyContribution, setYearlyContribution] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    const handleReset = () => {
        setCurrentSavings('');
        setYearlyContribution('');
        setExpectedReturn('');
        setDuration('');
    };

    const handleCalculate = (userInput) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
        const yearlyData = []; // per-year results

        // let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
        // const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        // const expectedReturn = +userInput['expected-return'] / 100;
        // const duration = +userInput['duration'];

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }

        // console.log(yearlyData);
        // do something with yearlyData ...
    };

    // useEffect(() => {
    //     console.log(currentSavings);
    //     console.log(yearlyContribution);
    //     console.log(expectedReturn);
    //     console.log(duration);
    // }, [currentSavings, yearlyContribution, expectedReturn, duration]);

    return (
        <div>
            <Header/>
            <InputForm
                currentSavings={currentSavings}
                setCurrentSavings={setCurrentSavings}
                yearlyContribution={yearlyContribution}
                setYearlyContribution={setYearlyContribution}
                expectedReturn={expectedReturn}
                setExpectedReturn={setExpectedReturn}
                duration={duration}
                setDuration={setDuration}
                handleReset={handleReset}
                handleCalculate={handleCalculate}
            />

            {/* Todo: Show below table conditionally (only once result data is available) */}
            {/* Show fallback text if no data is available */}
            <ResultsTable/>
        </div>
    );
};

export default App;
