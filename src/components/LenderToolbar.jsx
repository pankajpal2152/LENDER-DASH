import { useNavigate } from "react-router-dom";
import "./LenderToolbar.css";

export default function LenderToolbar() {
  const navigate = useNavigate();

  return (
    <div className="lender-toolbar-wrapper">
      <div className="lender-toolbar">
        {/* Search */}
        <div className="lender-search">
          <img
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search"
          />
          <input placeholder="Search here" />
        </div>

        {/* Add More */}
        <button
          className="add-more-btn"
          onClick={() => navigate("/lenders/add")}
        >
          + Add More
        </button>
      </div>
    </div>
  );
}