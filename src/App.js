import React from 'react';
import './App.css';

import data from "./data.js"
import Cart from './components/Cart';
import Products from './components/Products';
import SearchBar from './components/SearchBar';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchString: "",
      products: data,
      cart: []
    }
  } // constructor()

  render() {
    let products = [], keyword = this.state.searchString;
    for(let i=0; i<this.state.products.length; i++){
      if(this.state.products[i].name.toLowerCase().includes(keyword.toLowerCase())) products.push(this.state.products[i]);
    }

    return (
      <div>

        <div className="topWrap">
          <SearchBar updateSearch={this.updateSearch.bind(this)}/>
          <Cart cart={this.state.cart} updateCart={this.updateCartFromCart.bind(this)}/>
        </div>

        <Products products={products} updateCart={this.updateCartFromProducts.bind(this)}/>
        
      </div>
    );
  } // render()

  updateSearch(value) {
    this.setState({
      searchString: value
    });
  } // updateSearch()

  updateCartFromCart(index) {
    let array = this.state.cart;
    array.splice(index, 1);
    this.setState({
      cart: array
    });
  } // updateCartFromCart()

  updateCartFromProducts(index) {
    let array = this.state.cart;
        array.push(this.state.products[index]);
        this.setState({
          cart: array
        });
  } // updateCartFromProducts()

} // App{}