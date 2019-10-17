import React from 'react';

export default class Products extends React.Component {

  render() {
    return (
      <div className="productsWrap">
          <center>
          {
              this.props.products.map( (product, index) =>
                <div className="product" key={"product"+product.id}>
                    <img src={product.image} alt=""/>
                    <font>{product.name}</font>
                    <p>{Number(product.price).toFixed(2)} лв.</p>
                    <button onClick={() => this.props.updateCart(index)}>ADD TO CART</button>
                </div>
              )
          }
          </center>
      </div>
    );
  } // render()

} // Products{}