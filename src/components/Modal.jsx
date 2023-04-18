import { useState } from "react";

//Components
import Message from "./Message";

//Assets
import CloseBtn from "../assets/cerrar.svg";

function Modal({ setModal, animateModal, setAnimateModal, saveSpent }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("")

    const closeModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 300);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if([name, amount,category].includes("")) {
            setMessage("All fields are mandatory")

            setTimeout(() => {
                setMessage("")
            }, 3000);

            return
        }


        saveSpent({name, amount, category})
        
    } 

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseBtn} alt="close-button" onClick={closeModal} />
            </div>

            <form
                className={`formulario ${animateModal ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}
            >
                <legend>New Spent</legend>
                {message && (
                    <Message type="error">{message}</Message>
                )}

                <div className="campo">
                    <label htmlFor="name">Spent Name</label>
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

                <input type="submit" value="Add Spent" />
            </form>
        </div>
    );
}
export default Modal;
