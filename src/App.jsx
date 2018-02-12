import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { v4 } from 'uuid'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import fire from './fire'
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
const Dashboard = ({ addNewProduct=f=>f, onChange=f=>f, onFormSelect=f=>f, formState={} }) =>
(
  <Container>
    <h1>Dashboard</h1>
    <AddProductForm
      addNewProduct={addNewProduct}
      onChange={onChange}
      onFormSelect={onFormSelect}
      formState={formState} />
  </Container>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProduct: {
        id: '',
        name: '',
        price: 0,
        category: '',
        subCategory: '',
      }
    }
    this.onFormInput = this.onFormInput.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onFormSelect = this.onFormSelect.bind(this)
    this.renderDashboard = this.renderDashboard.bind(this)
  }

  onFormInput(event) {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [event.target.name]: event.target.value,
      }
    })
  }

  onFormSelect(name, value) {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [name]: value,
      }
    })
  }

  onFormSubmit() {
    console.log('submit woe')
    const newProduct = this.state.newProduct
    const productId = v4()
    fire.database().ref(`products/${productId}`).set({
      name: newProduct.name,
      price: newProduct.price,
      category: newProduct.category,
      subcategory: newProduct.subCategory
    })
  }

  renderDashboard() {
    return (
      <Dashboard
        addNewProduct={this.onFormSubmit}
        onChange={this.onFormInput}
        onFormSelect={this.onFormSelect}
        formState={this.state.newProduct}/>
    )
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Shop} />
          <Route
            path='/dashboard'
            component={this.renderDashboard} />
        </div>
      </Router>
    )
  }
}

export default App;
