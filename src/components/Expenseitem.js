import React from 'react'

function Expenseitem(props) {
    const {expenses, amount, handleDelete, handleEdit} = props
    return (
        <>
        <li className='item'>
            <span>{expenses}</span>
            <span>{amount}</span>
            <span>
                <i className='fas fa-edit' onClick={handleEdit}></i>
                <i className='fas fa-trash-alt' onClick={handleDelete} ></i>
            </span>
        </li>
    </>
    )
}

export default Expenseitem
