import React, { useState } from 'react'
import { MoreHorizontal, Filter, Download, Plus } from 'lucide-react'
import Modal from './Modal'
import './InventoryTable.css'

const InventoryTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const inventory = [
        { id: 1, name: 'MacBook Pro 16"', category: 'Laptop', status: 'Available', price: '$2,499', date: '2024-01-15' },
        { id: 2, name: 'Dell XPS 15', category: 'Laptop', status: 'In Use', price: '$1,899', date: '2024-01-12' },
        { id: 3, name: 'LG UltraFine 5K', category: 'Monitor', status: 'Available', price: '$1,299', date: '2024-01-10' },
        { id: 4, name: 'Keychron K2', category: 'Peripheral', status: 'Broken', price: '$89', date: '2023-12-28' },
        { id: 5, name: 'Sony WH-1000XM5', category: 'Audio', status: 'In Use', price: '$349', date: '2023-12-25' },
        { id: 6, name: 'iPad Pro 12.9"', category: 'Tablet', status: 'Available', price: '$1,099', date: '2023-11-20' },
    ]

    const getStatusClass = (status) => {
        switch (status) {
            case 'Available': return 'status-available';
            case 'In Use': return 'status-in-use';
            case 'Broken': return 'status-broken';
            default: return '';
        }
    }

    return (
        <>
            <div className="inventory-card">
                <div className="table-header">
                    <h2 className="table-title">ລາຍການອຸປະກອນ (Equipment List)</h2>
                    <div className="table-actions">
                        <button className="btn-secondary">
                            <Filter size={16} />
                            Filter
                        </button>
                        <button className="btn-secondary">
                            <Download size={16} />
                            Export
                        </button>
                        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
                            <Plus size={16} />
                            Add Item
                        </button>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th>ຊື່ (Name)</th>
                                <th>ໝວດໝູ່ (Category)</th>
                                <th>ສະຖານະ (Status)</th>
                                <th>ລາຄາ (Price)</th>
                                <th>ວັນທີ (Date)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map((item) => (
                                <tr key={item.id}>
                                    <td className="fw-500">{item.name}</td>
                                    <td className="text-secondary">{item.category}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusClass(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="fw-500">{item.price}</td>
                                    <td className="text-secondary">{item.date}</td>
                                    <td>
                                        <button className="action-icon-btn">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="ເພີ່ມອຸປະກອນໃໝ່ (Add New Item)">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label className="form-label">ຊື່ (Item Name)</label>
                        <input type="text" className="form-input" placeholder="Enter item name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">ໝວດໝູ່ (Category)</label>
                        <select className="form-select">
                            <option>Select category</option>
                            <option>Laptop</option>
                            <option>Monitor</option>
                            <option>Peripheral</option>
                        </select>
                    </div>
                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label className="form-label">ລາຄາ (Price)</label>
                            <input type="text" className="form-input" placeholder="$0.00" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">ສະຖານະ (Status)</label>
                            <select className="form-select">
                                <option>Available</option>
                                <option>In Use</option>
                                <option>Broken</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" style={{ background: 'transparent', border: '1px solid var(--text-muted)' }} onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Save Item
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
export default InventoryTable
