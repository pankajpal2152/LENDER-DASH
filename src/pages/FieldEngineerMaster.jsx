import FieldEngineerHeader from "../component/FieldEngineerHeader";
import FieldEngineerToolbar from "../component/FieldEngineerToolbar";
import FieldEngineerTableCard from "./FieldEngineerTableCard";
import "./FieldEngineerMaster.css";

export default function FieldEngineerMaster() {
  return (
    <div className="engineer-page">
      <FieldEngineerHeader />
      <FieldEngineerToolbar />
      <FieldEngineerTableCard />
    </div>
  );
}
