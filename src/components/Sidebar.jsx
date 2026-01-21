import React from 'react'
import { LayoutDashboard, Package, BarChart2, Settings, LogOut } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'ພາບລວມ (Dashboard)', path: '/dashboard' },
        { icon: Package, label: 'ສາງເຄື່ອງ (Inventory)', path: '/inventory' },
        { icon: BarChart2, label: 'ລາຍງານ (Reports)', path: '/reports' },
        { icon: Settings, label: 'ຕັ້ງຄ່າ (Settings)', path: '/settings' },
    ]

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-icon">
                    <Package size={20} color="white" />
                </div>
                <h1 className="logo-text">IT Inventory</h1>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        <item.icon className="nav-icon" size={20} />
                        <span className="nav-label">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button className="nav-item logout">
                    <LogOut className="nav-icon" size={20} />
                    <span className="nav-label">ອອກຈາກລະບົບ</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
