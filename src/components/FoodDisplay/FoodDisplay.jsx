import { useContext } from "react";
import "./FoodDisplay.scss";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";


export default function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-display" id="food-display">
            <h2 className="title">Top dishes near you</h2>
            <div className="food-list">
                {
                    category === "All" ?
                        food_list.map((item, i) => {
                            return <FoodItem key={i} item={item} />
                        })
                        :
                        food_list.filter(e => e.category === category).map((item, i) => {
                            return <FoodItem key={i} item={item} />
                        })
                }

            </div>
        </div>
    )
}