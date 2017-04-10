import React, { Component } from 'react';
import Pict1 from './IMG/up1.png';
import logo1 from './IMG/git3.png';
import logo2 from './IMG/pf1.png';
import './style.css';


class Math1 extends Component{

    sum(){
        var data1 = parseInt(document.getElementById("in1").value);
        var data2 = parseInt(document.getElementById("in2").value);
        var total = data1 + data2;

        if (isNaN(total)){
            if(isNaN(data1) && Number.isInteger(data2)){console.log("First Empty"); total = data2;}
            if(isNaN(data2) && Number.isInteger(data1)){console.log("Second Empty"); total = data1;}
            if(isNaN(data1) && isNaN(data2)){console.log("Both Empty"); total = 0;}
            console.log(" ");
        }

        document.getElementById("in3").innerHTML = total;
    }

    render(){
        return(
            <div className="m-cont">

                <div className="app-cont">
                    <h1>Add Two Numbers</h1>
                    <p className="sub-t">Powered by React.js</p>

                    <img className="pic1" src={Pict1} alt="Y la Pic??" />

                    <div className="data-cont">

                        <div className="indata">
                            <label>Number 1:</label>
                            <input type="text" name="perc" id="in1" className="in1" />
                        </div><br/>


                        <div className="indata">
                            <label>Number 2:</label>
                            <input type="text" name="perc" id="in2" className="in1" />
                        </div><br/>


                        <input className="button1" type="submit" onClick={() => this.sum()} value="Sum Numbers"></input><br/><br/>


                        <div className="indata">
                            <label>-- Total --</label>
                            <div id="in3" className="answ1"></div>
                        </div><br/>

                    </div>


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
