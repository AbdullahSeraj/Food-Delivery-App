import { menu_list } from "../../assets/assets"
import "./ExploreMenu.scss"

export default function ExploreMenu({ category, setCategory }) {
    return (
        <div className="explore-menu" id="menu">
            <h2 className="title">Explore Our Menu</h2>
            <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eos, autem voluptates veniam molestias blanditiis magni aperiam provident impedit deleniti temporibus eveniet dolor saepe iste sit vitae dignissimos quo aut.</p>
            <div className="menu">
                {menu_list.map((list, i) => {
                    return <div key={i} className={`list ${category === list.menu_name ? "active" : ''}`} onClick={() => setCategory(prev => prev === list.menu_name ? "All" : list.menu_name)} >
                        <img src={list.menu_image} alt="" />
                        <p>{list.menu_name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}