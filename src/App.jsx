import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';
import AddProductForm from './components/dashboard/AddProductForm'
// import ProductList from './components/shop/ProductList';

const Shop = () =>
(
  <div>
    <h1>Shop</h1>
    {/* <ProductList/> */}
  </div>
)
const Dashboard = () =>
(
  <Container>
    <h1>Dashboard</h1>
    <AddProductForm/>
  </Container>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Shop} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    )
  }
}

export default App;
