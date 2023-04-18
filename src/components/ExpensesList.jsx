import Expense from "./Expense"

function ExpensesList({expenses}) {
  return (
    <div className="listado-gastos contenedor">
        <h2>{expenses.length ? 'Expenses' : 'No expenses yet'}</h2>

        {expenses.map((expense) => {
            return (
                <Expense 
                key={expense.id}
                expense={expense}
                />
            )
        })}
    </div>
  )
}
export default ExpensesList