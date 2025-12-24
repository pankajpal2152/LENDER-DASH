import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LenderMaster from "./pages/LenderMaster";
import EditLender from "./pages/EditLender";
import AddLender from "./pages/AddLender";
import EditAggregator from "./pages/EditAggregator";
import EditLenderBranch from "./pages/EditLenderBranch";
import ViewAggregator from "./pages/ViewAggregator";



import "./App.css";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        isMobile={isMobile}
        closeSidebar={closeSidebar}
      />

      {/* Main content */}
      <div className="main">
        <Header toggleSidebar={toggleSidebar} />

        <Routes>
          <Route path="/" element={<div>Dashboard (Coming Soon)</div>} />
          <Route path="/lenders" element={<LenderMaster />} />
          <Route path="/lenders/add" element={<AddLender />} />
          <Route path="/lenders/edit/:id" element={<EditLender />} />
          <Route path="/aggregators/add" element={<EditAggregator />} />
          <Route path="/aggregators/edit/:id" element={<EditAggregator />} />
          <Route path="/lender-branches/add" element={<EditLenderBranch />} />
          <Route path="/lender-branches/edit/:id" element={<EditLenderBranch />} />
          <Route path="/aggregators/view/:id" element={<ViewAggregator />} />
        </Routes>

      </div>

      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div className="overlay" onClick={closeSidebar} />
      )}
    </div>
  );
}