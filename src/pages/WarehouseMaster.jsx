import WarehouseHeader from "../component/WarehouseHeader";
import WarehouseToolbar from "../component/WarehouseToolbar";
import WarehouseTableCard from "./WarehouseTableCard";
import "./WarehouseMaster.css";

export default function WarehouseMaster() {
  return (
    <div className="warehouse-page">
      <WarehouseHeader />
      <WarehouseToolbar />
      <WarehouseTableCard />
    </div>
  );
}
