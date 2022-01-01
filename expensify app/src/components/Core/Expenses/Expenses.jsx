import { useState } from "react";
import "./Expenses.css";
import ExpenseList from "../ExpenseList/ExpenseList";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses(props) {
  const [filterData, setFilterData] = useState("2021");
  const expenseFilter = (data) => {
    setFilterData(data);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterData
  );
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterData}
          expenseFilter={expenseFilter}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
