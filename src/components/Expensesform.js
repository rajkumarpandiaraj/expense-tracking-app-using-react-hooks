import React from 'react'

function Expensesform(props) {
    const {expenses, amount, handleExpenses, handleAmount, handleSubmit, hasEdit} = props
    return (
        <form  onSubmit={(e) => handleSubmit(e)}>
            <div className='field-group'>
                <div className='field'>
                    <label htmlFor='expenses-name'>Expenses</label>
                    <input value={expenses} onChange={handleExpenses} type='text' placeholder='e.g. rent' id='expenses-name'  />
                </div>
                <div className='field'>
                    <label htmlFor='expenses-amount'>Amount</label>
                    <input value={amount} onChange={handleAmount} type='number' placeholder='e.g. 5000' id='expenses-amount'  />
                </div>
            </div>
            <button type='submit' className='btn-submit' onClick={(e) => handleSubmit(e)}>
                {
                    hasEdit? 'Edit' : 'Submit' 
                }
            </button>
        </form>
    )
}

export default Expensesform
