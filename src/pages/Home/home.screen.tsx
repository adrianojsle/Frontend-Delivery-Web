import Menu from "../../components/Menu/menu.component"
import Sidebar from "../../components/Sidebar/sidebar.component"

export default function HomeScreen() {

    return (
      <div className="flex h-screen">
        <Sidebar />
        <Menu />
        <div className="w-3/12 bg-white"></div>
      </div>
    )
  }
  