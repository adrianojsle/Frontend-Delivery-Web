import Logo from "../Logo/logo.component";
import Menu from "./parts/menu.part";
import Home from "../../assets/icons/home.png";
import Vendas from "../../assets/icons/vendas.png";
import Pedidos from "../../assets/icons/pedidos.png";
import Mensagens from "../../assets/icons/mensagens.png";
import Configuracoes from "../../assets/icons/configuracoes.png";
import Sair from "../../assets/icons/sair.png";

export default function Sidebar() {
    return <div className="w-1/12 bg-white p-6">
        <Logo />
        <div className="flex flex-col justify-center items-center pt-6">
            <Menu icon={Home} label="Home" active={true} />
            <Menu icon={Vendas} label="Vendas" active={false} />
            <Menu icon={Mensagens} label="Mensagens" active={false} />
            <Menu icon={Pedidos} label="Pedidos" active={false} />
            <Menu icon={Configuracoes} label="Configurações" active={false} />
        </div>
        <div className="flex grow mt-16">
            <div className="w-20 py-2 flex flex-col justify-center items-center mb-4">
                <img src={Sair} className="w-6 h-6" />
                <span className="text-xs text-gray-400 mt-1">Sair</span>
            </div>
        </div>
    </div>
}