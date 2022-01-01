import { useState } from "react";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isNewExpense, setIsNewExpense] = useState(false);
  const newExpense = (newExpense) => {
    props.AddNewExpense(newExpense);
  };
  const newExpenseToggle = () => {
    setIsNewExpense(!isNewExpense);
  };
  return (
    <div className="new-expense">
      {isNewExpense ? (
        <NewExpenseForm
          newExpense={newExpense}
          newExpenseToggle={newExpenseToggle}
        />
      ) : (
        <button onClick={newExpenseToggle}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
