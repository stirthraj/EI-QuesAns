import axios from 'axios';
import React, { Component } from 'react'

export default class questions extends Component {
    constructor(props){
        super(props);
        this.state={
           quesandans:[]
        }
    }
    componentDidMount(){
        axios.get('https://600e587a3bb1d100179dee45.mockapi.io/quesandans')
        .then(res=>{
            console.log(res.data);
            const quesandans=res.data;
            this.setState({quesandans});
        })
    }
    render() {
        return (
            <div id="quesandans">
                <div className="table">
                    <div>
                    <div className="d-flex flex-row justify-content-lg-around">
                        <div>QuestionId</div>
                        <div>Questions</div>
                        <div>Ask By</div>
                        <div>Answers</div>
                        <div>Ans By</div>
                    </div> 
                    </div>
                    <div className="bg-primary">
                {this.state.quesandans.map(data=><div className="d-flex flex-row justify-content-lg-around" key={data.id}><div>{data.id}</div><div>{data.ques}</div><div>{data.askby}</div><div>{data.ans}</div><div>{data.ansby}</div></div>)}
                    </div>
                    <div>
                    <div className="d-flex flex-row"><div>The End</div></div>
                    </div>
                </div>
            </div>
        )
    }
}
