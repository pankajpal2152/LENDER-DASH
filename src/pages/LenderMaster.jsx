import LenderPageHeader from "../components/LenderPageHeader";
import LenderToolbar from "../components/LenderToolbar";
import LenderTableCard from "../components/LenderTableCard";
import "./LenderMaster.css";

export default function LenderMaster() {
  return (
    <div className="lender-page">
      <LenderPageHeader />
      <LenderToolbar />
      <LenderTableCard />
    </div>
  );
}
