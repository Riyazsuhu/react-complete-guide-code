import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
const ExpenseList = (props) => {
  if (!props.filteredExpenses.length)
    return <h2 className="expenses-list__fallback">Expense Not Found!!</h2>;
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
