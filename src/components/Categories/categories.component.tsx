import TitleSection from "../TitleSection/title-section.component";
import ItemCategory from "./parts/item-category.part";

export default function Categories() {
    return <div>
        <TitleSection firstWord="Menu de " secondWord="Categorias" />
        <div className="mt-6 flex flex-row">
            <ItemCategory title="Novidades" active={true} />
            <ItemCategory title="Pizzas" active={false} />
            <ItemCategory title="Salgados" active={false} />
            <ItemCategory title="Doces" active={false} />
            <ItemCategory title="Bebidas" active={false} />
            <ItemCategory title="Cafés" active={false} />
            <ItemCategory title="Sorvetes" active={false} />
            <ItemCategory title="Saladas" active={false} />
        </div>
    </div>
}