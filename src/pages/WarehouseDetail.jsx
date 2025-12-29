import "./WarehouseDetail.css";

export default function WarehouseDetail() {
  // Dummy data (later replace with API response)
  const warehouse = {
    code: "WH-001",
    type: "MAIN",
    ownerType: "COMPANY",
    aggregatorId: "9d2f-33ad-99ff",
    status: "ACTIVE",
    address: "Godrej Garden City, Ahmedabad",
    state: "Gujarat",
    district: "Ahmedabad",
    latitude: 23.0225,
    longitude: 72.5714,
    contactPerson: "Rahul Sharma",
    mobile: "9876543210",
    email: "warehouse@company.com",
    remarks: "Primary distribution center",
    pincodes: [
      { id: 1, pincode: "382470" },
      { id: 2, pincode: "382475" },
      { id: 3, pincode: "380005" },
    ],
  };

  return (
    <div className="warehouse-detail-container">
      {/* Header */}
      <div className="header">
        <div>
          <h2>{warehouse.code}</h2>
          <span className={`status ${warehouse.status.toLowerCase()}`}>
            {warehouse.status}
          </span>
        </div>
      </div>

      {/* Info Cards */}
      <div className="card-grid">
        <div className="card">
          <h4>Warehouse Info</h4>
          <p><b>Type:</b> {warehouse.type}</p>
          <p><b>Owner Type:</b> {warehouse.ownerType}</p>
          <p><b>Aggregator ID:</b> {warehouse.aggregatorId}</p>
        </div>

        <div className="card">
          <h4>Contact Info</h4>
          <p><b>Person:</b> {warehouse.contactPerson}</p>
          <p><b>Mobile:</b> {warehouse.mobile}</p>
          <p><b>Email:</b> {warehouse.email}</p>
        </div>

        <div className="card full">
          <h4>Address</h4>
          <p>{warehouse.address}</p>
          <p>{warehouse.district}, {warehouse.state}</p>
          <p>
            <b>Lat:</b> {warehouse.latitude} | <b>Lng:</b> {warehouse.longitude}
          </p>
        </div>
      </div>

      {/* Pincode Table */}
      <div className="card">
        <h4>Serviceable Pincodes</h4>

        <table className="pincode-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Pincode</th>
            </tr>
          </thead>
          <tbody>
            {warehouse.pincodes.map((pin, index) => (
              <tr key={pin.id}>
                <td>{index + 1}</td>
                <td>{pin.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Remarks */}
      <div className="card">
        <h4>Remarks</h4>
        <p>{warehouse.remarks}</p>
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="secondary">Back to List</button>
        <button>Edit Warehouse</button>
      </div>
    </div>
  );
}
