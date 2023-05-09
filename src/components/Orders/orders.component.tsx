import SubtitleSection from "../SubtitleSection/subtitle-section.component";
import ItemOrder from "./parts/item-order.part";
import Hamburguer from "../../assets/img/1.png";

export default function Orders() {
    return <div className="mt-8">
        <SubtitleSection firstWord="Escolha o " secondWord="Pedido" />
        <div className="mt-6 flex flex-row flex-wrap">
            <ItemOrder img={Hamburguer}/>
            <ItemOrder img={Hamburguer}/>
            <ItemOrder img={Hamburguer}/>
            <ItemOrder img={Hamburguer}/>
            <ItemOrder img={Hamburguer}/>
            <ItemOrder img={Hamburguer}/>
            <ItemOrder img={Hamburguer}/>
            <ItemOrder img={Hamburguer}/>
            <ItemOrder img={Hamburguer}/>
            <ItemOrder img={Hamburguer}/>
        </div>
    </div>
}