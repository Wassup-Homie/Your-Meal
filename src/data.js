let orders = []

export function addOrder(order) {
	orders.push(order)
}

export function getOrders() {
	return orders
}

export function clearOrders() {
	orders = []
}
