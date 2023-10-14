import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  // filtering array using selected array, we are getting array from props
  const filteredList = props.item.filter(
    (temp) => temp.date.getFullYear().toString() === selectedYear
  );

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilterChange={yearChangeHandler}
        />
        
        <ExpensesChart expenses={filteredList}/>

        <ExpensesList item={filteredList}/>
        
      </Card>
    </div>
  );
}

export default Expenses;
