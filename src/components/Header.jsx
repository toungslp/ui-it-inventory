import React from 'react'
import { Search, Bell, User } from 'lucide-react'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="search-bar">
                <Search className="search-icon" size={18} />
                <input
                    type="text"
                    placeholder="ຄົ້ນຫາອຸປະກອນ (Search)..."
                    className="search-input"
                />
            </div>

            <div className="header-actions">
                <button className="action-btn">
                    <Bell size={20} />
                    <span className="notification-badge"></span>
                </button>

                <div className="divider"></div>

                <div className="user-profile">
                    <div className="avatar">
                        <span>AD</span>
                    </div>
                    <div className="user-info">
                        <span className="user-name">Admin User</span>
                        <span className="user-role">IT Department</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
