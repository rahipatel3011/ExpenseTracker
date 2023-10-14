import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm(props) {
  const [titleText, setTitleText] = useState("");
  const [amountText, setAmountText] = useState("");
  const [dateText, setDateText] = useState("");


  const titleChangeHandler = (event) => {
    setTitleText(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmountText(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateText(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: titleText,
      amount: +amountText, // enforce number conversion from string
      date: new Date(dateText),
    };

    setAmountText("");
    setTitleText("");
    setDateText("");
    props.onSaveData(expenseData);
  }



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={titleText} onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amountText}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={dateText}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.formShow}> Cancel </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
