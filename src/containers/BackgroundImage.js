import React, { Component } from 'react';
import test from '../containers/test.jpg';

function BackgroundImage(){
    return (
        <div>
            <img src={test}/>
        </div>
    );
}
export default BackgroundImage;