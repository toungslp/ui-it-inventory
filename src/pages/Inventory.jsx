import React from 'react'
import InventoryTable from '../components/InventoryTable'

const Inventory = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">ຄັງອຸປະກອນ (Inventory Management)</h2>
                <p className="text-secondary">ຈັດການຂໍ້ມູນອຸປະກອນທັງໝົດໃນລະບົບ</p>
            </div>
            <InventoryTable />
        </div>
    )
}

export default Inventory
