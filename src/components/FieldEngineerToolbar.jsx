import { useNavigate } from "react-router-dom";
import "./FieldEngineerToolbar.css";

export default function FieldEngineerToolbar() {
  const navigate = useNavigate();

  return (
    <div className="fe-toolbar-wrapper">
      <div className="fe-toolbar">
        {/* Search */}
        <div className="fe-search">
          <img
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search"
          />
          <input placeholder="Search here" />
        </div>

        {/* Add Engineer */}
        <button
          className="add-more-btn"
          onClick={() => navigate("/field-engineer/create")}
        >
          + Add Engineer
        </button>
      </div>
    </div>
  );
}
