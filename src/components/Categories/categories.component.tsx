import TitleSection from "../TitleSection/title-section.component";
import ItemCategory from "./parts/item-category.part";
import Novidades from "../../assets/icons/novidades.png";
import Pizzas from "../../assets/icons/pizzas.png";
import Salgados from "../../assets/icons/salgados.png";
import Doces from "../../assets/icons/doces.png";
import Bebidas from "../../assets/icons/bebidas.png";
import Panquecas from "../../assets/icons/panquecas.png";
import Sorvetes from "../../assets/icons/sorvetes.png";
import Saladas from "../../assets/icons/saladas.png";


export default function Categories() {
    return <div>
        <TitleSection firstWord="Menu de " secondWord="Categorias" />
        <div className="mt-6 flex flex-row">
            <ItemCategory title="Novidades" active={true} icon={Novidades} />
            <ItemCategory title="Pizzas" active={false} icon={Pizzas} />
            <ItemCategory title="Salgados" active={false} icon={Salgados} />
            <ItemCategory title="Doces" active={false} icon={Doces} />
            <ItemCategory title="Bebidas" active={false} icon={Bebidas} />
            <ItemCategory title="Panquecas" active={false} icon={Panquecas} />
            <ItemCategory title="Sorvetes" active={false} icon={Sorvetes} />
            <ItemCategory title="Saladas" active={false} icon={Saladas} />
        </div>
    </div>
}