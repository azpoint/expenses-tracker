import { useEffect, useState } from "react";

function BudgetControl({ budget, expenses }) {
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce(
            (total, gasto) => gasto.amount + total,
            0
        );

        const totalAvailable = budget - totalSpent;

        setAvailable(totalAvailable);

        setSpent(totalSpent);
    }, [expenses]);

    const formatAmount = (amount) => {
        return amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>grafica aqui</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Budget:</span> {formatAmount(budget)}
                </p>
                <p>
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
