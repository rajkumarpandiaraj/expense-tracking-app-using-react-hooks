    import React,{useState} from 'react'
import Expensesform from './Expensesform'
import Expenseslist from './Expenseslist'
import Alert from './Alert'
import './all.min.css';
import { v4 as uuidv4 } from 'uuid';

function Budgetapp() {
    let initialExpenses ={
        id : '',
        expenses : '',
        amount : ''
    }
    const [expenses,setExpense] = useState(initialExpenses);
    const [expensesArr, setExpensesArr] = useState([]);
    const [hasEdit, setHasEdit] = useState(false)
    const [alert, setAlert] = useState({message: '', color : '',})
    const [styling, setStyling] = useState({display : 'none'})

    const handleExpenses = (e)=>{
        setExpense({...expenses, id : uuidv4(), expenses : e.target.value})
    }

    const handleAmount = (e) => {
        setExpense({...expenses, amount : e.target.value})
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        if(expenses.expenses === '' || expenses.amount === ''){
            handleAlert('Enter The Required Field', 'red');
        } else{
            
        setHasEdit(false);
        setExpensesArr([...expensesArr, expenses])
        setExpense({
            id : '',
            expenses : '',
            amount : ''
        })
        handleAlert('Item Added', 'green')
        }
    }

    const handleClearAll = () =>{
        setExpensesArr([]);
        handleAlert('All Items Cleared', 'red')
    }

    const handleAlert = (message, color) =>{
        setStyling({display : 'block'})
        setAlert({ message: message, color : color})
        setTimeout(() => {
            setStyling({display : 'none'})
            setAlert({message: '', color : '',})
        }, 3000);
    }
    const handleDelete = (id) =>{
        const updatedArr = expensesArr.filter(expense => expense.id !== id)
        setExpensesArr(updatedArr);
        handleAlert('Item Deleted', 'red')

    }

    const handleEdit = (id) => {
        setHasEdit(true);
        console.log(hasEdit);
        const updatedArr = expensesArr.filter(expense => expense.id !== id)
        setExpensesArr(updatedArr);
        const editItem = expensesArr.find(expense => expense.id === id)
        setExpense({
            id : editItem.id,
            expenses : editItem.expenses,
            amount : editItem.amount
        })
        handleAlert('Item Added to Edit', 'red')

    }
    return (
        <>
        <Alert Alert={alert} styling={styling} />
        <div className='container'>
            <h1>Expense Tracking App </h1>
            <main>
            <Expensesform expenses={expenses.expenses} amount={expenses.amount} 
                            handleExpenses={handleExpenses} handleAmount={handleAmount}
                            handleSubmit={handleSubmit} hasEdit={hasEdit} />
            <Expenseslist expensesArr={expensesArr} handleClearAll={handleClearAll}
                            handleDelete={handleDelete} handleEdit={handleEdit} />
            </main>
    <h2>Total expenses = {expensesArr.reduce((acc,curr) => {return acc += +curr.amount},0)}</h2>
        </div>
        </>
    )
}

export default Budgetapp
