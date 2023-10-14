import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, {useState} from 'react';
    
const NewExpense = (props)=>{
    
    const [isFormShow, setIsFormShow] = useState(false);

    const expenseButtonHandler = ()=>{
        setIsFormShow(true);
    };

    //this handler will excute when cancel button is pressed for Expenseform.js page. passing data from child to parent.
    const cancelButtonHandler = ()=>{
        setIsFormShow(false);
    }

    const saveDataHandler = (expenseData)=>{
        const expense = {...expenseData, id:Math.random().toString()};
        props.onAddExpense(expense);
        setIsFormShow(true);
    };
    return <div className="new-expense">
        {isFormShow ? <ExpenseForm formShow={cancelButtonHandler} onSaveData={saveDataHandler}/> 
            : <button type="button" onClick={expenseButtonHandler}>Add new Expense</button>}
         
    </div>;
}

export default NewExpense;