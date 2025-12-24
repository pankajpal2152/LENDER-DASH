import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./EditLender.css";

export default function EditLender() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    // fallback if user refreshes
    const [formData, setFormData] = useState(
        state || {
            id,
            code: "",
            name: "",
            type: "",
            region: "",
            active: false,
        }
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Lender:", formData);

        // 🔜 API call will go here later

        navigate("/lenders");
    };

    return (
        <div className="edit-lender-page">
            <div className="card edit-lender-card">
                <h2>Edit Lender</h2>

                <form onSubmit={handleSubmit} className="edit-form">
                    <label>
                        Lender ID
                        <input
                            name="code"
                            value={formData.id}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Lender Code
                        <input
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Lender Name
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Lender Type
                        <select name="type" value={formData.type} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="NBFC">NBFC</option>
                            <option value="Bank">Bank</option>
                        </select>
                    </label>

                    <label>
                        Region
                        <input
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="checkbox-row">
                        <input
                            type="checkbox"
                            name="active"
                            checked={formData.active}
                            onChange={handleChange}
                        />
                        Active
                    </label>

                    <div className="form-actions">
                        <button type="button" onClick={() => navigate("/lenders")}>
                            Cancel
                        </button>
                        <button type="submit" className="primary">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
