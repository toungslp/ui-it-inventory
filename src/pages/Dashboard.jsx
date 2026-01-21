import React from 'react'
import DashboardStats from '../components/DashboardStats'

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">ພາບລວມ (Dashboard Overview)</h2>
                <p className="text-secondary">ຍິນດີຕ້ອນຮັບກັບມາ, Admin User</p>
            </div>

            <DashboardStats />

            <div className="bg-card p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">ກິດຈະກຳລ່າສຸດ (Recent Activity)</h3>
                <p className="text-muted">No recent activity to show.</p>
            </div>
        </div>
    )
}

export default Dashboard
