import React, { useState } from 'react'
import { User, Bell, Lock, Globe, Save } from 'lucide-react'
import './Settings.css'

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile')

    const tabs = [
        { id: 'profile', label: 'ຂໍ້ມູນສ່ວນຕົວ (Profile)', icon: User },
        { id: 'notifications', label: 'ການແຈ້ງເຕືອນ (Notifications)', icon: Bell },
        { id: 'security', label: 'ຄວາມປອດໄພ (Security)', icon: Lock },
        { id: 'system', label: 'ຕັ້ງຄ່າລະບົບ (System)', icon: Globe },
    ]

    return (
        <div className="flex flex-col gap-8 fade-in">
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">ຕັ້ງຄ່າລະບົບ (Settings)</h2>
                <p className="text-secondary">Manage your account preferences and system configuration</p>
            </div>

            <div className="settings-container">
                {/* Sidebar Tabs */}
                <div className="settings-sidebar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <tab.icon size={18} />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="settings-content bg-card border border-white/5">
                    {activeTab === 'profile' && (
                        <div className="animate-fade">
                            <div className="profile-header-banner"></div>

                            <div className="profile-section">
                                <div className="profile-identity">
                                    <div className="profile-avatar-wrapper">
                                        <div className="profile-avatar">AD</div>
                                        <button className="avatar-edit-btn">
                                            <User size={14} />
                                        </button>
                                    </div>
                                    <div className="profile-text">
                                        <h3 className="text-xl font-bold text-white">Admin User</h3>
                                        <p className="text-secondary text-sm">Head of IT Department</p>
                                    </div>
                                </div>

                                <form className="profile-form">
                                    <h4 className="section-title">ຂໍ້ມູນພື້ນຖານ (Basic Information)</h4>
                                    <div className="grid grid-cols-2 gap-6 mb-6">
                                        <div className="form-group">
                                            <label className="form-label">ຊື່ (First Name)</label>
                                            <input type="text" className="form-input" defaultValue="Admin" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">ນາມສະກຸນ (Last Name)</label>
                                            <input type="text" className="form-input" defaultValue="User" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">ອີເມວ (Email)</label>
                                            <input type="email" className="form-input" defaultValue="admin@company.com" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">ເບີໂທ (Phone)</label>
                                            <input type="text" className="form-input" defaultValue="+856 20 5555 9999" />
                                        </div>
                                    </div>

                                    <h4 className="section-title">ບົດບາດແລະໜ້າທີ່ (Role & Department)</h4>
                                    <div className="grid grid-cols-2 gap-6 mb-6">
                                        <div className="form-group">
                                            <label className="form-label">ພະແນກ (Department)</label>
                                            <select className="form-select">
                                                <option>IT Department</option>
                                                <option>HR</option>
                                                <option>Finance</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">ຕຳແໜ່ງ (Position)</label>
                                            <input type="text" className="form-input" defaultValue="Manager" />
                                        </div>
                                        <div className="form-group col-span-2">
                                            <label className="form-label">ກ່ຽວກັບ (Bio)</label>
                                            <textarea className="form-input h-24" defaultValue="Responsible for overseeing all IT assets and infrastructure." />
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                                        <button type="button" className="btn btn-secondary" style={{ background: 'transparent', border: '1px solid var(--text-muted)' }}>
                                            Cancel
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            <Save size={18} />
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="animate-fade settings-padding">
                            <h3 className="text-xl font-bold text-white mb-6">Notification Preferences</h3>
                            <div className="flex flex-col gap-4">
                                {['Email Alerts for Low Stock', 'Maintenance Reminders', 'New Device Added Alerts', 'Weekly Reports'].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                                        <span className="text-white font-medium">{item}</span>
                                        <div className="toggle-switch">
                                            <input type="checkbox" defaultChecked={i < 2} />
                                            <span className="slider"></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end pt-6">
                                <button className="btn-primary">
                                    <Save size={18} />
                                    Update Preferences
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Placeholders for other tabs */}
                    {(activeTab === 'security' || activeTab === 'system') && (
                        <div className="animate-fade flex flex-col items-center justify-center h-64 text-center settings-padding">
                            <Lock size={48} className="text-slate-600 mb-4" />
                            <h4 className="text-lg font-medium text-white">Secure Zone</h4>
                            <p className="text-secondary max-w-sm">
                                Advanced settings are locked in this demo mode.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Settings
