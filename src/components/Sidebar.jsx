import { NavLink } from "react-router-dom";
import { Home, Users, LogOut } from "lucide-react";
import "./Sidebar.css";

// Brand assets
import xconicsMini from "../assets/xconics mini logo.jpeg";
import xconicsText from "../assets/Xconics_logo_blue (3).png";

export default function Sidebar({ isOpen, isMobile, closeSidebar }) {
  const user = {
    name: "Lisa Roy",
    role: "Designer",
  };

  const handleNavClick = () => {
    if (isMobile) closeSidebar();
  };

  return (
    <aside
      className={`sidebar ${isOpen ? "open" : "collapsed"} ${
        isMobile ? "mobile" : ""
      }`}
    >
      {/* ===== BRAND ===== */}
      <div className="brand">
        <img src={xconicsMini} alt="Xconics" className="brand-icon" />
        {isOpen && (
          <img src={xconicsText} alt="Xconics" className="brand-text-logo" />
        )}
      </div>

      {/* ===== NAV ===== */}
      <nav className="nav">
        {/* Dashboard → Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
          onClick={handleNavClick}
        >
          <span className="nav-icon">
            <Home size={20} strokeWidth={1.8} />
          </span>
          {isOpen && <span className="nav-label">Dashboard</span>}
        </NavLink>

        {/* Lender → Lender Master */}
        <NavLink
          to="/lenders"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
          onClick={handleNavClick}
        >
          <span className="nav-icon">
            <Users size={20} strokeWidth={1.8} />
          </span>
          {isOpen && <span className="nav-label">Lender</span>}
        </NavLink>
      </nav>

      {/* ===== FOOTER ===== */}
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>

          {isOpen && (
            <div className="user-text">
              <strong>{user.name}</strong>
              <p>{user.role}</p>
            </div>
          )}
        </div>

        {isOpen && (
          <button className="signout-btn" aria-label="Sign out">
            <LogOut size={18} />
          </button>
        )}
      </div>
    </aside>
  );
}
