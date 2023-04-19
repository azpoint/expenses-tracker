import { useState, useEffect } from "react";

//Components
import Message from "./Message";

//Assets
import CloseBtn from "../assets/cerrar.svg";

function Modal({
    setModal,
    animateModal,
    setAnimateModal,
    saveSpent,
    editExpense,
    setEditExpense
}) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");
    const [id, setId] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        if (Object.keys(editExpense).length > 0) {
        setName(editExpense.name)
        setAmount(editExpense.amount)
        setCategory(editExpense.category)
        setId(editExpense.id)
        setDate(editExpense.date)
        }
    }, [])
    

    const closeModal = () => {
        setAnimateModal(false);
        setEditExpense({})

        setTimeout(() => {
            setModal(false);
        }, 300);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([name, amount, category].includes("")) {
            setMessage("All fields are mandatory");

            setTimeout(() => {
                setMessage("");
            }, 3000);

            return;
        }

        saveSpent({ name, amount, category, id, date });
    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseBtn} alt="close-button" onClick={closeModal} />
            </div>

            <form
                className={`formulario ${animateModal ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}
            >
                <legend>{editExpense.name ? "Edit Expense" : "New Expense"}</legend>
                {message && <Message type="error">{message}</Message>}

                <div className="campo">
                    <label htmlFor="name">Expense Name</label>
                    <input
                        type="text"
                        placeholder="Add the spent name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        placeholder="Add the amount"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">-- Select --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="expense">Expenses</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <input type="submit" value="Add Expense" />
            </form>
        </div>
    );
}
export default Modal;
