
//Components
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

function Header({ budget, setBudget, isValidBudget, setIsValidBudget, expenses, setExpenses }) {
    return (
        <header>
            <h1>Expenses Tracker</h1>

            {isValidBudget ? (
                <BudgetControl budget={budget} setBudget={setBudget} expenses={expenses} setExpenses={setExpenses} setIsValidBudget={setIsValidBudget}/>
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}
        </header>
    );
}
export default Header;
