import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'; 

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            ZIP: null
        }
    }
    componentDidMount () {

    }
    render () {
        return (
            <div>
                <h4>Enter Contact Data</h4>
                {/* <form>
                    <input type="text" name="name" placeholder="YOur Name"></input>
                    <input type="email" name="email" laceholder="YOur email"></input>
                    <input type="text" name="street" laceholder="YOur street"></input>
                    <input type="number" name="zip" laceholder="YOur ZIP"></input>
                    <Button buttonType="Success">Order</Button>
                </form> */}
            </div>
        )
    }
}

export default ContactData;