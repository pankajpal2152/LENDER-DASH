import { useLocation, useNavigate, useParams } from "react-router-dom";
import LenderPageHeader from "../components/LenderPageHeader";
import "./ViewAggregator.css"; // ✅ reuse Aggregator view styles

export default function ViewLender() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const lender = location.state;

    // ✅ SAFETY: Never blank screen
    if (!lender) {
        return (
            <div className="lender-page">
                <LenderPageHeader
                    title="Lender View"
                    breadcrumbLabel="Lender > View"
                />

                <div className="view-card-wrapper">
                    <div className="card view-card">
                        <h3>No data found for Lender ID: {id}</h3>
                        <p>Please go back and select a lender again.</p>

                        <div className="view-actions">
                            <button
                                className="add-more-btn secondary"
                                onClick={() => navigate("/lenders")}
                            >
                                Back to Lenders
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="lender-page">
            {/* HEADER */}
            <LenderPageHeader
                title="Lender View"
                breadcrumbLabel="Lender > View"
            />

            {/* VIEW CARD (READ-ONLY FORM STYLE) */}
            <div className="view-card-wrapper">
                <div className="card view-card">
                    <div className="view-grid">
                        <div className="view-field">
                            <label>Lender ID</label>
                            <span>{lender.id}</span>
                        </div>

                        <div className="view-field">
                            <label>Lender Code</label>
                            <span>{lender.code}</span>
                        </div>

                        <div className="view-field">
                            <label>Lender Name</label>
                            <span>{lender.name}</span>
                        </div>

                        <div className="view-field">
                            <label>Lender Type</label>
                            <span>{lender.type}</span>
                        </div>

                        <div className="view-field">
                            <label>Region</label>
                            <span>{lender.region}</span>
                        </div>

                        <div className="view-field">
                            <label>Status</label>
                            <span>{lender.active ? "Active" : "Inactive"}</span>
                        </div>
                    </div>

                    {/* ONLY BACK BUTTON */}
                    <div className="view-actions">
                        <button
                            className="add-more-btn secondary"
                            onClick={() => navigate("/lenders")}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
