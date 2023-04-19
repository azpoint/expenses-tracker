import { useState, useEffect } from "react";

function Filters({filter, setFilter}) {
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label htmlFor="">Expenses Filter</label>
                    <select 
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
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
            </form>
        </div>
    );
}
export default Filters;
