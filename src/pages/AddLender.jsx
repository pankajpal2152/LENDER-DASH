import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EditLender.css"; // reuse same styles

export default function AddLender() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    type: "",
    region: "",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Lender:", formData);

    // 🔜 API POST will go here later

    navigate("/lenders");
  };

  return (
    <div className="edit-lender-page">
      <div className="card edit-lender-card">
        <h2>Add New Lender</h2>

        <form onSubmit={handleSubmit} className="edit-form">
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
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
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
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
