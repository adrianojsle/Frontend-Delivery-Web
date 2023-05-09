import Categories from "../Categories/categories.component";
import Orders from "../Orders/orders.component";

export default function Menu() {
    return <div className="w-8/12 bg-light p-10">
        <div>
            <Categories />
            <Orders />
        </div>
    </div>
}