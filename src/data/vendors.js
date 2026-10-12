const vendors = [
        {
        id: 'kafe-halimah',
            name: 'Kafe Mahallah Halimah',
            location: 'Mahallah Halimah, Beside Mart Halimah',
            openHours: '7:00 am - 10:00 pm',
            isOpen: true,
            menu: [
            { id: 'hal-1', name: 'Nasi Lemak Ayam', description: 'Coconut rice, fried chicken, sambal, egg and peanuts', price: 7.5, category: 'Rice', available: true },
            { id: 'hal-2', name: 'Mee Goreng Mamak', description: 'Yellow noodles fried with egg, tofu and spicy sauce', price: 6, category: 'Noodles', available: true },
            { id: 'ha;-3', name: 'Teh Tarik', description: 'Pulled milk tea, served hot or cold', price: 2.5, category: 'Drinks', available: false },
            ],
        },
        {
        id: 'kafe-aminah',
            name: 'Kafe Mahallah Aminah',
            location: 'Mahallah Aminah, Ground Floor',
            openHours: '8:00 am - 9:00 pm',
            isOpen: true,
            menu: [
            { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
            { id: 'ami-2', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },
            ],
        },
]
export default vendors