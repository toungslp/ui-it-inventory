import React from 'react'
import { PieChart, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'
import './Reports.css'

const Reports = () => {
    const categoryData = [
        { name: 'Laptops', count: 120, total: 245, color: 'bg-blue-500' },
        { name: 'Monitors', count: 45, total: 245, color: 'bg-purple-500' },
        { name: 'Peripherals', count: 60, total: 245, color: 'bg-green-500' },
        { name: 'Tablets', count: 20, total: 245, color: 'bg-orange-500' },
    ]

    const maintenanceLog = [
        { id: 101, device: 'Dell XPS 13', issue: 'Battery Replacement', cost: '$120', date: '2024-01-20', status: 'Completed' },
        { id: 102, device: 'HP LaserJet', issue: 'Paper Jam / Roller', cost: '$45', date: '2024-01-18', status: 'Pending' },
        { id: 103, device: 'MacBook Air', issue: 'Screen Repair', cost: '$350', date: '2024-01-15', status: 'Completed' },
    ]

    return (
        <div className="flex flex-col gap-8 fade-in">
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">ລາຍງານ ແລະ ສະຖິຕິ (Reports & Analytics)</h2>
                <p className="text-secondary">Summary of inventory status and maintenance</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Category Distribution Card */}
                <div className="bg-card p-6 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <PieChart size={20} className="text-brand" />
                            ການແຈກຢາຍອຸປະກອນ (Category Dist.)
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {categoryData.map((cat) => (
                            <div key={cat.name}>
                                <div className="flex justify-between text-sm mb-1 text-secondary">
                                    <span>{cat.name}</span>
                                    <span>{cat.count} items ({Math.round(cat.count / cat.total * 100)}%)</span>
                                </div>
                                <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${cat.color}`}
                                        style={{ width: `${(cat.count / cat.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Budget / Cost Card */}
                <div className="bg-card p-6 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <TrendingUp size={20} className="text-green-500" />
                            ງົບປະມານ (Budget Overview)
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                            <span className="block text-secondary text-sm mb-1">Total Asset Value</span>
                            <span className="text-2xl font-bold text-white">$45,200</span>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                            <span className="block text-secondary text-sm mb-1">Maintenance Cost</span>
                            <span className="text-2xl font-bold text-red-400">$2,450</span>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded-lg col-span-2">
                            <span className="block text-secondary text-sm mb-1">New Purchases (Q1)</span>
                            <span className="text-xl font-bold text-blue-400">$12,800</span>
                            <div className="text-xs text-secondary mt-1">Pending approval: $3,500</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Maintenance Log */}
            <div className="bg-card p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <AlertCircle size={20} className="text-orange-500" />
                    ປະຫວັດການສ້ອມແປງ (Maintenance Log)
                </h3>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/5 text-sm uppercase text-secondary">
                            <th className="py-3 px-2">Device</th>
                            <th className="py-3 px-2">Issue</th>
                            <th className="py-3 px-2">Date</th>
                            <th className="py-3 px-2">Cost</th>
                            <th className="py-3 px-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {maintenanceLog.map((log) => (
                            <tr key={log.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-3 px-2 text-white font-medium">{log.device}</td>
                                <td className="py-3 px-2 text-secondary">{log.issue}</td>
                                <td className="py-3 px-2 text-secondary">{log.date}</td>
                                <td className="py-3 px-2 text-white">{log.cost}</td>
                                <td className="py-3 px-2 text-sm">
                                    {log.status === 'Completed' ? (
                                        <span className="flex items-center gap-1 text-green-400">
                                            <CheckCircle size={14} /> Completed
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-orange-400">
                                            <AlertCircle size={14} /> Pending
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reports
