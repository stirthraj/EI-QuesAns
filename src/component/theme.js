import React from 'react'
import '../App.css'
import Loginform from './loginform';

class theme extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "k1":"",
            "k2":""
        }
    }
    
    Bgl=()=>{
         let bg=document.getElementById("theme");
         bg.style.backgroundColor="white";
         bg.style.color="black";
    }
    Bgd=()=>{
        let bg=document.getElementById("theme");
         bg.style.backgroundColor="black";
         bg.style.color="white";
    }
    Bgg=()=>{
         let bg=document.getElementById("theme");
         bg.style.backgroundColor="green";
         bg.style.color="white";
    }
    Bgc=()=>{
        let bg=document.getElementById("theme");
        let bgc=prompt("Please enter background");
        bg.style.backgroundColor=bgc;
        //  bg.style.backgroundColor="white";
        //  bg.style.color="black";
    }
    Btc=()=>{
        let bg=document.getElementById("theme");
        let bgc=prompt("Please enter background");
        bg.style.color=bgc;

    }



    render(){
        return(
            <>
            <header id="theme" className="App-header">
                <div style={{marginTop:"0px"}} id="buttons">
                <span>{date()}</span>    
                <button onClick={this.Bgl}>Light</button>
                <button onClick={this.Bgd}>Dark</button>
                <button onClick={this.Bgg}>Green</button>
                <button onClick={this.Bgc}>Custom</button>
                <button onClick={this.Btc}>CustomTextColor</button>
                </div>
                <Loginform/>
            </header>
            </>
        )
    }

}
function date() {
    let d=new Date();
    return d.toDateString();
}
export default theme;










