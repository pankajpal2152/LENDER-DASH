import "./FieldEngineerDetail.css";

export default function FieldEngineerDetail() {
  // Dummy data (replace later with API)
  const engineer = {
    id: "fe-1234-uuid",
    engineerCode: "ENG-001",
    engineerName: "Amit Kumar",
    mobileNo: "9123456789",
    emailId: "amit.kumar@company.com",
    aggregatorId: "aggr-9988-uuid",
    branchCode: "BR-KOL-01",
    employmentType: "FULL_TIME",
    state: "West Bengal",
    district: "Kolkata",
    baseLocation: "Salt Lake",
    skillset: ["Networking", "Device Installation", "Troubleshooting"],
    assignedDeviceCount: 12,
    engineerStatus: "ACTIVE",
    joiningDate: "2023-04-10",
    lastWorkingDate: null,
    idProofType: "AADHAAR",
    idProofNumber: "XXXX-XXXX-1234",
    currentLatitude: 22.5726,
    currentLongitude: 88.3639,
    locationUpdatedAt: "2025-01-10 10:45 AM",
    remarks: "Experienced field engineer with strong troubleshooting skills",
  };

  return (
    <div className="field-engineer-detail-container">
      {/* Header */}
      <div className="header">
        <div>
          <h2>{engineer.engineerCode}</h2>
          <span className={`status ${engineer.engineerStatus.toLowerCase()}`}>
            {engineer.engineerStatus}
          </span>
        </div>
      </div>

      {/* Info Cards */}
      <div className="card-grid">
        <div className="card">
          <h4>Engineer Info</h4>
          <p><b>Name:</b> {engineer.engineerName}</p>
          <p><b>Employment:</b> {engineer.employmentType}</p>
          <p><b>Branch Code:</b> {engineer.branchCode}</p>
          <p><b>Aggregator ID:</b> {engineer.aggregatorId}</p>
        </div>

        <div className="card">
          <h4>Contact Info</h4>
          <p><b>Mobile:</b> {engineer.mobileNo}</p>
          <p><b>Email:</b> {engineer.emailId}</p>
        </div>

        <div className="card full">
          <h4>Location Details</h4>
          <p><b>Base Location:</b> {engineer.baseLocation}</p>
          <p>{engineer.district}, {engineer.state}</p>
          <p>
            <b>Lat:</b> {engineer.currentLatitude} |{" "}
            <b>Lng:</b> {engineer.currentLongitude}
          </p>
          <p><b>Last Updated:</b> {engineer.locationUpdatedAt}</p>
        </div>
      </div>

      {/* Skills Table */}
      <div className="card">
        <h4>Skill Set</h4>

        <table className="skill-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Skill</th>
            </tr>
          </thead>
          <tbody>
            {engineer.skillset.map((skill, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{skill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Employment & ID Info */}
      <div className="card-grid">
        <div className="card">
          <h4>Employment Details</h4>
          <p><b>Assigned Devices:</b> {engineer.assignedDeviceCount}</p>
          <p><b>Joining Date:</b> {engineer.joiningDate}</p>
          <p>
            <b>Last Working Date:</b>{" "}
            {engineer.lastWorkingDate || "Currently Working"}
          </p>
        </div>

        <div className="card">
          <h4>ID Proof</h4>
          <p><b>Type:</b> {engineer.idProofType}</p>
          <p><b>Number:</b> {engineer.idProofNumber}</p>
        </div>
      </div>

      {/* Remarks */}
      <div className="card">
        <h4>Remarks</h4>
        <p>{engineer.remarks}</p>
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="secondary">Back to List</button>
        <button>Edit Engineer</button>
      </div>
    </div>
  );
}
