import React from 'react'
import { Monitor, Server, AlertTriangle, DollarSign, TrendingUp } from 'lucide-react'
import './DashboardStats.css'

const DashboardStats = () => {
    const stats = [
        {
            label: 'ທັງໝົດ (Total Items)',
            value: '245',
            icon: Monitor,
            color: 'blue',
            trend: '+12% this month'
        },
        {
            label: 'ມູນຄ່າລວມ (Total Value)',
            value: '$45,200',
            icon: DollarSign,
            color: 'green',
            trend: '+5% vs last month'
        },
        {
            label: 'ເຄື່ອງກຳລັງຈະໝົດ (Low Stock)',
            value: '8',
            icon: AlertTriangle,
            color: 'orange',
            trend: 'Needs attention'
        },
        {
            label: 'ໝວດໝູ່ (Categories)',
            value: '12',
            icon: Server,
            color: 'purple',
            trend: 'Stable state'
        }
    ]

    return (
        <div className="stats-grid">
            {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                    <div className="stat-icon-wrapper" style={{ '--stat-color': `var(--${stat.color}-500)` }}>
                        <stat.icon size={24} className={`text-${stat.color}-500`} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">{stat.label}</span>
                        <div className="stat-value-group">
                            <span className="stat-value">{stat.value}</span>
                        </div>
                        <div className="stat-trend">
                            <TrendingUp size={14} />
                            <span>{stat.trend}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DashboardStats
