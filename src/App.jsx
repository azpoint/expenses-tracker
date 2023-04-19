//Dependencies
import { useState, useEffect } from "react";
import { keyGen } from "./helpers";

//Componets
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";
import Filters from "./components/Filters";

//Assets
import NewSpent from "./assets/nuevo-gasto.svg";

function App() {
    const [budget, setBudget] = useState(
        localStorage.getItem("budget") ?? 0
    );
    const [isValidBudget, setIsValidBudget] = useState(false);

    const [modal, setModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);

    const [expenses, setExpenses] = useState(
        localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : []
    );
    const [editExpense, setEditExpense] = useState({});

    const [filter, setFilter] = useState("")
    const [filteredExpenses, setFilteredExpenses] = useState([])



    useEffect(() => {
        if(filter) {
            const filteredExpenses = expenses.filter( expense => expense.category === filter)

            setFilteredExpenses(filteredExpenses)
        }
    }, [filter])

    useEffect(() => {
        if (Object.keys(editExpense).length > 0) {
            setModal(true);

            setTimeout(() => {
                setAnimateModal(true);
            }, 300);
        }
    }, [editExpense]);

    useEffect(() => {
        Number(localStorage.setItem("budget", budget ?? 0))
    }, [budget])

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses) ?? [])
    }, [expenses])
    

    useEffect(() => {
        const budgetLS = Number(localStorage.getItem("budget")) ?? 0

        if(budgetLS > 0) {
            setIsValidBudget(true)
        }

    }, [])


    const handleNewSpent = () => {
        setEditExpense({});
        setModal(true);

        setTimeout(() => {
            setAnimateModal(true);
        }, 300);
    };

    const saveSpent = (spent) => {
        if (spent.id) {
            const expenseUpdated = expenses.map( expenseState => expenseState.id === spent.id ? spent : expenseState)
            setExpenses(expenseUpdated)
            setEditExpense({})
        } else {
            spent.id = keyGen();
            spent.date = Date.now();
            setExpenses([...expenses, spent]);
        }

        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 300);
    };

    const deleteExpense = id => {
        const expensesUpdated = expenses.filter( expense => expense.id !== id)

        setExpenses(expensesUpdated)
    }

    return (
        <div className={modal ? "fijar" : ""}>
            <Header
                expenses={expenses}
                setExpenses={setExpenses}
                budget={budget}
                setBudget={setBudget}
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget}
            />

            {isValidBudget && (
                <>
                    <main>
                        <Filters
                        filter={filter}
                        setFilter={setFilter}
                        />
                        <ExpensesList
                            expenses={expenses}
                            setEditExpense={setEditExpense}
                            deleteExpense={deleteExpense}
                            filter={filter}
                            filteredExpenses={filteredExpenses}
                        />
                    </main>
                    <div className="nuevo-gasto">
                        <img
                            src={NewSpent}
                            alt="new-spent-icon"
                            onClick={handleNewSpent}
                        />
                    </div>
                </>
            )}

            {modal && (
                <Modal
                    setModal={setModal}
                    animateModal={animateModal}
                    setAnimateModal={setAnimateModal}
                    saveSpent={saveSpent}
                    editExpense={editExpense}
                    setEditExpense={setEditExpense}
                />
            )}
        </div>
    );
}

export default App;
