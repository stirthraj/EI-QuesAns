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
                <h1>Questions and Answers</h1>
                <table>
                    <caption>Latest Questions and Answers</caption>
                    <thead>
                    <tr>
                        <th>QuestionId</th>
                        <th>Questions</th>
                        <th>Ask By</th>
                        <th>Answers</th>
                        <th>Ans By</th>
                    </tr> 
                    </thead>
                    <tbody>
                {this.state.quesandans.map(data=><tr key={data.id}><td>{data.id}</td><td>{data.ques}</td><td>{data.askby}</td><td>{data.ans}</td><td>{data.ansby}</td></tr>)}
                    </tbody>
                    <tfoot>
                    <tr><td colSpan="5">The End</td></tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
