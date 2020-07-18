import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import classes from './components/Layout/Layout.module.css'
class App extends Component {
  
  render() {
    console.log(classes);
    return (
      <div>
       <Layout>
         <BurgerBuilder/>
       </Layout>
      </div>
    );
  }
}

export default App;
