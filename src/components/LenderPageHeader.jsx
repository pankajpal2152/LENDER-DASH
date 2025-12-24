import { Link } from "react-router-dom";
import "./LenderPageHeader.css";

// ✅ Right-side image from assets
import headerImage from "../assets/Xconics_logo_blue (3).png";

export default function LenderPageHeader() {
    return (
        <div className="card lender-header-card">
            <div className="lender-header-content">
                {/* LEFT */}
                <div>
                    <h2 className="lender-title">Lender Master</h2>

                    <p className="lender-breadcrumb">
                        {/* ✅ Clickable Home */}
                        <Link to="/" className="breadcrumb-home">
                            Home
                        </Link>
                        <span className="breadcrumb-separator">•</span>
                        <span>Lender List</span>
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <img
                    src={headerImage}
                    alt="Lender header"
                    className="lender-header-image"
                />
            </div>
        </div>
    );
}
