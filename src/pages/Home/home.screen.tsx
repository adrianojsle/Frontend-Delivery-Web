import Menu from "../../components/Menu/menu.component"
import OrderSidebar from "../../components/OrderSidebar/order-sidebar.component"
import Sidebar from "../../components/Sidebar/sidebar.component"

export default function HomeScreen() {

    return (
      <div className="flex h-screen">
        <Sidebar />
        <Menu />
        <OrderSidebar />
      </div>
    )
  }
  