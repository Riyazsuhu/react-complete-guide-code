import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: ""
  // })
  const titleChangeListener = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput((prevState) => ({...prevState, enteredTitle: e.target.value}))
  };
  const amountChangeListener = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput((prevState) => ({...prevState, enteredAmount: e.target.value}))
  };
  const dateChangeListener = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput((prevState) => ({...prevState, enteredDate: e.target.value}))
  };
  const submitListener = (e) => {
    e.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };
    props.newExpense(expense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.newExpenseToggle()
  };
  return (
    <form onSubmit={submitListener}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeListener}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeListener}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="20-12-2021"
            value={enteredDate}
            onChange={dateChangeListener}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.newExpenseToggle}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
