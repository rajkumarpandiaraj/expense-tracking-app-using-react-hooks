import React from 'react'
import Expensesitem from './Expenseitem'

function Expenseslist(props) {
    const {expensesArr, handleClearAll, handleDelete, handleEdit} = props
    return (
        <ul className='expenses-list'>
            <h1>Expenseslist</h1>
            {
                expensesArr !== [] && expensesArr.map(expenses => <Expensesitem key={expenses.id} expenses={expenses.expenses} amount={expenses.amount}
                    handleDelete={() => handleDelete(expenses.id)} handleEdit={() => handleEdit(expenses.id)} /> )
            }
            <button type='button' className='btn-delete' onClick={handleClearAll} >ClearItem</button>
        </ul>
    )
}

export default Expenseslist
