import React, { Component } from 'react';
import Pict1 from './IMG/up1.png';
import logo1 from './IMG/git3.png';
import logo2 from './IMG/pf1.png';
import './style.css';


class Math1 extends Component{

    sum(){
        var data1 = parseInt(document.getElementById(""));
        var data2 = parseInt(document.getElementById(""));
        var total = data1 + data2;
    }

    render(){
        return(
            <div className="m-cont">

                <div className="app-cont">
                    <h1>Add Two Numbers</h1>
                    <p>Powered by React.js</p>


                </div>
                
                <div className="bottom1 trans">
                    <div className="name"> <p>by: Edmundo Rubio</p> </div>
                    <div><a href="https://github.com/Edxael" target="blank"> <img className="icon" src={logo1} alt="??" /></a></div>
                    <div><a href="http://www.mycode.website/" target="blank"> <img className="icon" src={logo2} alt="??" /></a></div>
                </div>

            </div>
        )
    }
}

export default Math1;
