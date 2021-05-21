import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InvestmentAdvisory from './InvestmentAdvisory';
import RendererComp from '../Product/RendererComp';
import Popup from './Popup';
//import { useHistory } from 'react-router-dom';
//import { withRouter } from "react-router";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
          isOpen: false,
          setIsOpen: false
        };
        
    }

    togglePopup = () => {
        let b = this.state.isOpen;
        this.setState({isOpen: !b});
      }

    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props.data;
   //     const history = useHistory();
        console.log("View Details Button clicked"+this.props.data.id);
        
        if (this.props.data.id == 1) {
        //    history.push('/investmentAdvisory');
            this.setState({
                showComponent: true,
              });
        } 
    }

    render() {
        const { name, detail, currency, image, isInCart } = this.props.data;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h2>{name}</h2>
                    <h3>{detail}</h3>
                    <div className="product__button-wrap">
                        <button className='btn btn-primary'
                            onClick={this.togglePopup} >View Details</button>
                            {this.state.isOpen  && 
                            <Popup productId={this.props.data.id} handleClose={this.togglePopup}/>}
                            
                    </div>
                </div>
            </div>
        );
    }
}



export default Product;
