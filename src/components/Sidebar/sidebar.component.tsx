import Logo from "../Logo/logo.component";
import Home from "../../assets/icons/home.png";
import Vendas from "../../assets/icons/vendas.png";
import Pedidos from "../../assets/icons/pedidos.png";
import Mensagens from "../../assets/icons/mensagens.png";
import Configuracoes from "../../assets/icons/configuracoes.png";
import Sair from "../../assets/icons/sair.png";
import ItemSidebar from "./parts/item-sidebar.part";

export default function Sidebar() {
    return <div className="w-1/12 bg-white p-6">
        <Logo />
        <div className="flex flex-col justify-center items-center pt-6">
            <ItemSidebar icon={Home} label="Home" active={true} />
            <ItemSidebar icon={Vendas} label="Vendas" active={false} />
            <ItemSidebar icon={Mensagens} label="Mensagens" active={false} />
            <ItemSidebar icon={Pedidos} label="Pedidos" active={false} />
            <ItemSidebar icon={Configuracoes} label="Configurações" active={false} />
        </div>
        <div className="flex grow mt-16">
            <div className="w-20 py-2 flex flex-col justify-center items-center mb-4">
                <img src={Sair} className="w-6 h-6" />
                <span className="text-xs text-gray-400 mt-1">Sair</span>
            </div>
        </div>
    </div>
}