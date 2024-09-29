'use client'
import { useState } from 'react';

const FinanceTool = () => {
    const [needs, setNeeds] = useState('');
    const [savingGoal, setSavingGoal] = useState('');
    const [savings, setSavings] = useState('');
    const [redebits, setRedeBits] = useState('');
    const [wants, setWants] = useState('');
    const [monthlyIncome, setMonthlyIncome] = useState('');
    const [debits, setDebits] = useState('');
    const [result, setResult] = useState('');
    // @ts-expect-error unkown
    const handleSubmit = (event) => {
        event.preventDefault();

        const needsPercentage = parseFloat(needs) / 100 || 0;
        const savingsPercentage = parseFloat(savings) / 100 || 0;
        const wantsPercentage = parseFloat(wants) / 100 || 0;
        const debtPercentage = parseFloat(debits) / 100 || 0;
        const monthlyIncomeNum = parseFloat(monthlyIncome) || 0;
        const reDebits = parseFloat(redebits) || 0;
        const savingGoalNum = parseFloat(savingGoal) || 0;

        const needAmount = monthlyIncomeNum * needsPercentage;
        const savingAmount = monthlyIncomeNum * savingsPercentage;
        const wantsAmount = monthlyIncomeNum * wantsPercentage;
        const debtAmount = monthlyIncomeNum * debtPercentage;
        const monthsToPayOffDebit = Math.round(reDebits / (monthlyIncomeNum * debtPercentage || 1));
        const monthsToReachSavingsGoal = Math.round(savingGoalNum / (monthlyIncomeNum * savingsPercentage || 1));

        setResult(`
            <div class="text-center font-bold">
            Results<br />
            </div>
            Amount Towards Needs: <strong>$ ${needAmount.toFixed(2)}</strong><br>
            Amount Towards Savings: <strong>$ ${savingAmount.toFixed(2)}</strong><br>
            Amount Towards Wants: <strong>$ ${wantsAmount.toFixed(2)}</strong><br>
            Amount Towards Debt: <strong>$ ${debtAmount.toFixed(2)}</strong><br>
            Months Remaining to Pay Off Debt: <strong>${monthsToPayOffDebit}</strong><br>
            Months Remaining to Reach Saving Goal: <strong>${monthsToReachSavingsGoal}</strong><br><br>
            For more info and help go to our <strong>AI tool</strong> to get further ahead in your financial goals.
        `);
    };

    return (
        <div>
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:pt-24">
        <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Financial Planner</h1>
            <p className="mt-2 text-sm font-semibold text-gray-400">
            Budgeting can be complex, but our planner simplifies it for you. 
            Just enter the percentage you want to use for the following
            arears and what goals you are looking to reach. We’ll help you 
            better understand how much money you spend 
            in each area and how long it will take to achieve your goals.
            </p>
        </header>
    </div>
        <div className="container">
            <form id="myForm" className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="needs">Needs (%):</label>
                    <input type="number" min="0" max="100" id="needs" value={needs} onChange={(e) => setNeeds(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="savings">Savings (%):</label>
                    <input type="number" min="0" max="100" id="savings" value={savings} onChange={(e) => setSavings(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="wants">Wants (%):</label>
                    <input type="number" min="0" max="100" id="wants" value={wants} onChange={(e) => setWants(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="debits">Debt (%):</label>
                    <input type="number" min="0" id="debits" value={debits} onChange={(e) => setDebits(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="SavingGoal">Saving Goal: ($)</label>
                    <input type="number" min="0" id="SavingGoal" value={savingGoal} onChange={(e) => setSavingGoal(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="redebits">Remaining Debt: ($)</label>
                    <input type="number" id="redebits" value={redebits} onChange={(e) => setRedeBits(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="monthly_income">Monthly Income: ($)</label>
                    <input type="number" id="monthly_income" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} />
                </div>
                <div className="button-container border-2 w-[16%] px-2 mt-3" style={{ gridColumn: 'span 2' }}>
                    <input type="submit" value="Calculate" />
                </div>
            </form>

            <div id="result" dangerouslySetInnerHTML={{ __html: result }} style={{ marginTop: '20px' }} />
            
            <style jsx>{`
                 .about-title {
                 text-align: center;
                 margin-bottom: 10px;
                }
                 .about-paragraph {
                text-align: center; 
                margin: 0 auto; 
                max-width: 600px; 
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    margin-bottom: 50px;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }
                .form-group {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    border: 1px solid #aaa; 
                    padding: 10px;
                    border-radius: 5px;
                    justify-content: flex-start;

                }
                .form-group label {
                    margin-right: 10px;
                    width: 150px; 
                    padding: 5px; /* Padding inside the label box */
                    border-radius: 3px; 
                    background-color: #f9f9f9; 
                }
                input[type="text"],
                input[type="number"] {
                    flex: 1;
                }
                .button-container {
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 10px;
                }
            `}</style>
        </div>
    </div>
    );
};

export default FinanceTool;