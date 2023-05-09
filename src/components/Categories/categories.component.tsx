import TitleSection from "../TitleSection/title-section.component";
import ItemCategory from "./parts/item-category.part";

export default function Categories() {
    return <div>
        <TitleSection firstWord="Menu de " secondWord="Categorias" size="3xl" />
        <div>
            <ItemCategory />
        </div>
    </div>
}