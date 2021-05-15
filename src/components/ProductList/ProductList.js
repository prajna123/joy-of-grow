import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import products from '../../data/products';
import '../ProductList/ProductList.css';

const ProductList = () => {
    const data = products;
    return (
        <div>
            <h3 className="aboutus">
              <p>Our company is a small size startup company, where we help people to decide correct investment plan</p>
              <p>Currently we are focusing to provide 3 main services- Investment Advisory, Portfolio Management and Income Generation. Kindly check the details below</p>
              <p>We are working to comeup with many more services</p>
            </h3>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product data={product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}


export default ProductList;
