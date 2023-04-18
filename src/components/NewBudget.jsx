import { useState } from "react"

//Components
import Message from "./Message"

function Budget({budget, setBudget, setIsValidBudget}) {
    const [message, setMessage] = useState("")
    
    
    
    const handleBudget = (e) => {
        e.preventDefault()

        if(!budget || budget < 0 ) {
            setMessage("Not a valid budget")
            return
        } 

        setMessage("")

        setIsValidBudget(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">

            <form className="formulario" onSubmit={handleBudget}>
                <div className="campo">
                    <label htmlFor="">Set Budget</label>
                    <input
                        className="nuevo-presupuesto"
                        placeholder="Add your budget"
                        type="number"
                        value={budget}
                        onChange={e => setBudget(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="Add" />

                {message && <Message type="error">{message}</Message>}
            </form>
        </div>
    );
}
export default Budget;
