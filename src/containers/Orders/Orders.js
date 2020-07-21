import React, { Component } from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios'
class Orders extends Component {
    state = {
        orders: []
    }
    async componentDidMount () {
        try {
            const response = await axios.get('/orders.json');
            const orders = []
            for (let key in response.data) {
                orders.push({
                    id: key,
                    ...response.data[key]
                })
            }
            console.log(orders);
            this.setState({orders: orders})
        } catch (err) {
            console.log(err)
        }
    }
    render () {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                    key={order.id} 
                    customer={order.customer} 
                    ingredients={order.ingredients}
                    deliveryMethod={order.deliveryMethod}
                    price={order.price}/>
                ))}
            </div>
        )
    }
}

export default Orders;