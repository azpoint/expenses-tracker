import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function BudgetControl({ budget, setBudget, expenses, setExpenses, setIsValidBudget }) {
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce(
            (total, gasto) => gasto.amount + total,
            0
        );
        const totalAvailable = budget - totalSpent;

        setAvailable(totalAvailable);
        setSpent(totalSpent);

        //Calculate percentage
        const newPercentage = (
            ((budget - totalAvailable) / budget) *
            100
        ).toFixed(2);

        setTimeout(() => {
            setPercentage(newPercentage);
        }, 800);
    }, [expenses]);

    const formatAmount = (amount) => {
        return amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    const handleResetApp = () => {
        const userResponse = confirm("Do you wish to reset all values?")

        if(userResponse) {
            setExpenses([])
            setBudget(0)
            setIsValidBudget(false)
        } 
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                value={percentage}
                styles={buildStyles({
                    pathColor: percentage > 100 ? "#dc2626" : "#3b82f6",
                    trailColor: '#e1e1e1',
                    textColor: percentage > 100 ? "#dc2626" : "#3b82f6"
                })}
                text={`${percentage}% Spent`}
                />
            </div>

            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleResetApp}>
                    Reset App
                </button>

                <p>
                    <span>Budget:</span> {formatAmount(budget)}
                </p>
                <p className={`${available < 0 ? "negativo" : ""}`}>
                    <span>Available:</span> {formatAmount(available)}
                </p>
                <p>
                    <span>Spent:</span> {formatAmount(spent)}
                </p>
            </div>
        </div>
    );
}
export default BudgetControl;
