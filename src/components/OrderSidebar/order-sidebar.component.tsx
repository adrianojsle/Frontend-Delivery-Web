import SubtitleSection from "../SubtitleSection/subtitle-section.component";
import ItemSubtotal from "./parts/item-subtotal.part";
import Hamburguer from "../../assets/img/1.png";
import Hamburguer2 from "../../assets/img/2.png";
import Hamburguer3 from "../../assets/img/3.png";
import Hamburguer4 from "../../assets/img/4.png";

export default function OrderSidebar() {
    return <div className="w-3/12 bg-white p-8 flex flex-col">
    <SubtitleSection firstWord="Subtotal do " secondWord="Pedido" />
    <div className="flex flex-col flex-grow">
      <div className="mt-8 flex flex-col">
        <ItemSubtotal title="Hambúrguer Triplo" price="R$ 29,90" img={Hamburguer} total={1} priceTotal="R$ 29,90" />
        <ItemSubtotal title="Hambúrguer Cheese" price="R$ 19,40" img={Hamburguer2} total={2} priceTotal="R$ 38,80" />
        <ItemSubtotal title="Hambúrguer Triplo 2" price="R$ 34,50" img={Hamburguer3} total={1} priceTotal="R$ 34,50" />
        <ItemSubtotal title="Hambúrguer Frango" price="R$ 29,90" img={Hamburguer4} total={1} priceTotal="R$ 29,90" />
      </div>
      <div className="flex flex-row justify-between mt-8">
        <span className="text-xs font-bold">Sub Total</span>
        <span className="text-xs font-bold">R$ 133,10</span>
      </div>
      <div className="flex flex-row justify-between mt-2">
        <span className="text-xs font-light">Taxa (5%)</span>
        <span className="text-xs font-light">R$ 6,65</span>
      </div>
    </div>
    <div className="flex flex-col mt-auto">
      <button className="bg-primary p-3 w-full rounded-lg justify-end">
        <span className="font-bold text-white text-lg">Pagar R$ 133,10</span>
      </button>
    </div>
  </div>
  
}