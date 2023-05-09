import Sidebar from "../../components/Sidebar/sidebar.component"

export default function HomeScreen() {

    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-8/12 bg-light"></div>
        <div className="w-3/12 bg-white"></div>
      </div>
    )
  }
  