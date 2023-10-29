import Dashboard from "./dashboard/DashBoard";
import  ManageStores from "./managestores/page";
import Inventory from "./inventory/page"



export default function Home({children}) {
  return (
    <div>
     <Dashboard>
      {/* <ManageStores/>
      <Inventory /> */}
      </Dashboard>
    </div>
  )
}
