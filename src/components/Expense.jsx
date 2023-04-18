//Dependencies
import { formatDate } from "../helpers";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"

//Assets
import savingsIcon from "../assets/icono_ahorro.svg"
import houseIcon from "../assets/icono_casa.svg"
import foodIcon from "../assets/icono_comida.svg"
import expenseIcon from "../assets/icono_gastos.svg"
import entertainmentIcon from "../assets/icono_ocio.svg"
import healthIcon from "../assets/icono_salud.svg"
import subscriptionsIcon from "../assets/icono_suscripciones.svg"

const iconsObject = {
  savings: savingsIcon,
  food: foodIcon,
  house: houseIcon,
  entertainment: entertainmentIcon,
  health: healthIcon,
  subscriptions: subscriptionsIcon,
  expense: expenseIcon,
}

function Expense({ expense }) {
    const { name, amount, category, id, date } = expense;

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={iconsObject[category]}
                />

                <div className="descripcion-gasto">
                    <p className="categoria">{category}</p>

                    <p className="nombre-gasto">{name}</p>

                    <p className="fecha-gasto">
                        Added on: <span>{formatDate(date)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">${amount}</p>
        </div>
    );
}
export default Expense;
