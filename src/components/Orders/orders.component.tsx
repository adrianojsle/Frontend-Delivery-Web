import SubtitleSection from "../SubtitleSection/subtitle-section.component";
import ItemOrder from "./parts/item-order.part";
import Hamburguer from "../../assets/img/1.png";
import Hamburguer2 from "../../assets/img/2.png";
import Hamburguer3 from "../../assets/img/3.png";
import Hamburguer4 from "../../assets/img/4.png";

export default function Orders() {
    return <div className="mt-8">
        <SubtitleSection firstWord="Escolha o " secondWord="Pedido" />
        <div className="mt-6 flex flex-row flex-wrap">
            <ItemOrder img={Hamburguer} title="Hambúrguer Triplo" price="R$ 39,90"/>
            <ItemOrder img={Hamburguer2} title="Hambúrguer Cheese" price="R$ 19,40"/>
            <ItemOrder img={Hamburguer3} title="Hambúrguer Triplo" price="R$ 34,50"/>
            <ItemOrder img={Hamburguer4} title="Hambúrguer Frango" price="R$ 29,90"/>
            <ItemOrder img={Hamburguer} title="Hambúrguer Triplo" price="R$ 39,90"/>
            <ItemOrder img={Hamburguer2} title="Hambúrguer Cheese" price="R$ 19,40"/>
            <ItemOrder img={Hamburguer3} title="Hambúrguer Triplo" price="R$ 34,50"/>
            <ItemOrder img={Hamburguer4} title="Hambúrguer Frango" price="R$ 29,90"/>
            <ItemOrder img={Hamburguer} title="Hambúrguer Triplo" price="R$ 39,90"/>
            <ItemOrder img={Hamburguer2} title="Hambúrguer Cheese" price="R$ 19,40"/>
        </div>
    </div>
}