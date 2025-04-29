const products = [
    { id: '1', name: 'Bluetooth Headphones', description: 'Over-ear wireless headphones with noise cancellation and 30 hours of battery life.' },
    { id: '2', name: 'Smartphone Stand', description: 'Adjustable and portable stand for smartphones, perfect for video calls or hands-free use.' },
    { id: '3', name: 'Fitness Tracker Watch', description: 'Wearable device that tracks your daily activity, heart rate, sleep, and more.' },
    { id: '4', name: 'Electric Coffee Maker', description: 'Programmable coffee machine with a 12-cup capacity and built-in grinder.' },
    { id: '5', name: 'LED Desk Lamp', description: 'Dimmable LED desk lamp with touch controls, perfect for home offices or studying.' },
    { id: '6', name: 'Portable Power Bank', description: '10,000mAh portable power bank for charging devices on the go.' },
    { id: '7', name: 'Ergonomic Office Chair', description: 'Comfortable office chair with adjustable height, lumbar support, and breathable mesh.' },
    { id: '8', name: 'Wireless Keyboard and Mouse Set', description: 'Compact wireless keyboard and mouse set with a slim design for easy use.' }
];
export function getAllProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 20000); // 20 sec delay
    });
}

export function getProductById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((p) => p.id === id));
        }, 10000); // 10 sec delay
    });
}