import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
class Checkout extends Component {

    onCheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    onCheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    componentDidMount () {
        console.log(this.props);
    }
    render () {
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.props.location.state}
                onCheckoutContinued={this.onCheckoutContinuedHandler}
                onCheckoutCancelled={this.onCheckoutCancelledHandler}/>
                <Route 
                path={this.props.match.path + '/contact-data'} 
                component={ContactData}></Route>
            </div>
        )
    }
}

export default Checkout;