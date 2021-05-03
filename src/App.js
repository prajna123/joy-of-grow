import React from 'react';
import './App.css';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import BackgroundImage from './containers/BackgroundImage';
import logo from './containers/logo.png';

const App = () => {
    return (
        <div className="container">
            <div className="row-centered">
                 <button className='btn btn-primary '>Contact Us</button>
            </div>
            <div className="row">
                <div className="col-md-12">
                <BackgroundImage></BackgroundImage>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <ProductList />
                </div>
            </div>

        </div>
    );
}

export default App;
