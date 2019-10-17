import React from 'react';
import uuid from "uuid";

import icon_cart from "../images/icon_cart.png"

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            showProducts: false
        }
    } // constructor()

  render() {

    let price = 0;
    for(let i=0; i<this.props.cart.length; i++) {
        price+=this.props.cart[i].price;
    }
    

    return (
      <div className="cartWrap" style={{ height: this.props.cart.length <= 3 ? (93+this.props.cart.length*65)+"px" : "300px"}}>
        <img className="cartIB" src={icon_cart} alt="" onClick={ () => this.setState({ showProducts: !this.state.showProducts }) }/>

        {
            this.props.cart.length !== 0 ?
            <div className="cartItemsCounter" onClick={ () => this.setState({ showProducts: !this.state.showProducts }) }>
                {this.props.cart.length}
            </div>
            : this.props.textOrHtml
        }

        {
            this.state.showProducts ?
                this.props.cart.length > 0 ?
                <div className="cartContentWrap">
                    <div className="cartPrice">
                        <font style={{float: "left", fontSize: "14px", fontWeight: "bold", color: "#828282", textAlign: "center", lineHeight: "30px"}}>&nbsp;&nbsp;ОБЩО:</font>
                        <font style={{float: "left", fontSize: "14px", color: "#828282", textAlign: "center", lineHeight: "30px"}}>&nbsp;{this.props.cart.length} {this.props.cart.length > 1 ? "продукта" : "продукт"}</font>
                        <font style={{float: "right", fontSize: "14px", fontWeight: "bold", color: "#828282", textAlign: "center", lineHeight: "30px"}}>{Number(price).toFixed(2)} лв.&nbsp;</font>
                    </div>
                    <div className="cartProductsWrap">
                        {
                            this.props.cart.map(
                                (item, index) =>
                                <div className="cartProduct" key={uuid.v4()}> {/*key={"cart"+item.id} понеже не запазвам и колко бройки се добавят в количката от един и същи продукт нещата се прецакват понеже се генерират едни и същи ключове*/}
                                    <img src={item.image} alt=""/>
                                    <font className="fontName">{item.name}</font>
                                    <font className="fontPrice">{Number(item.price).toFixed(2)} лв.</font>
                                    <div className="cartRemoveProduct" onClick={() => this.props.updateCart(index)}>&#x2716;</div>
                                </div>
                            )
                        }
                    </div>
                </div>
                :
                <div className="cartNoItems">
                    <font style={{fontSize: "14px", color: "#828282", textAlign: "center", lineHeight: "30px"}}>Вашата количка е празна</font>
                </div>
            : this.props.textOrHtml
        }

      </div>
    );
  } // render()

} // Cart{}