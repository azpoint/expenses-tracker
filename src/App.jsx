//Dependencies
import { useState } from "react";
import { keyGen } from "./helpers";

//Componets
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";

//Assets
import NewSpent from "./assets/nuevo-gasto.svg";

function App() {
    const [budget, setBudget] = useState(0);
    const [isValidBudget, setIsValidBudget] = useState(false);

    const [modal, setModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);

    const [expenses, setExpenses] = useState([]);

    const handleNewSpent = () => {
        setModal(true);

        setTimeout(() => {
            setAnimateModal(true);
        }, 300);
    };

    const saveSpent = (spent) => {
        spent.id = keyGen();
        spent.date = Date.now()
        setExpenses([...expenses, spent]);

        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 300);
    };

    return (
        <div className={modal ? 'fijar' : ''}>
            <Header
                expenses={expenses}
                budget={budget}
                setBudget={setBudget}
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget}
            />

            {isValidBudget && (
                <>
                <main>
                  <ExpensesList
                  expenses={expenses}
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
                />
            )}
        </div>
    );
}

export default App;
