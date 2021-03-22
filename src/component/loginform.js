import React, { Component } from 'react'
import axios from 'axios'
import Questions from './question&answer'

export default class loginform extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            doubts:""
            
        }
    }

    onChangeH=event=>{
        let nam=event.target.name;
        let val=event.target.value;

        this.setState({[nam]:val})
    }
    onSubmitH=(event)=>{
        event.preventDefault();
        let ques=this.state.question;
        let askby=this.state.username;
        // let text=document.getElementById('content-text-text');
        axios.post('https://600e587a3bb1d100179dee45.mockapi.io/quesandans',{ques,askby})
        .then(res=>{
            console.log(res.data);
            alert("Question added");
            window.location.reload();
        })
    }
    onChangeHA=event=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val})
    }
        onSubmitHA=(event)=>{
        event.preventDefault();
        let qid=this.state.qid;
        let ans=this.state.answer;
        let ansby=this.state.user;
        axios.put('https://600e587a3bb1d100179dee45.mockapi.io/quesandans/'+qid,{ans,ansby})
        .then(res=>{
        console.log(res.data);
        window.location.reload();
        })
        
    }
    render() {
        return (
            <>
            <div id="content">
                    <div id="content-text">
                        <div id="content-text-head">Question and Answer Platform</div>
                    </div>
                    <div id="content-form">
                        {this.state.question}
                      <form onSubmit={this.onSubmitH}>
                          <label>Question: 
                          <div><input type="text" name="question" placeholder="Write your question" onChange={this.onChangeH} required/></div>
                          </label>
                          <label>Username: 
                          <div><input type="text" name="username" placeholder="username" onChange={this.onChangeH} required/></div>
                          </label>
                          <input type="submit"/>
                      </form>
                    </div>
                    <div id="content-form">
                        {this.state.answer}
                      <form onSubmit={this.onSubmitHA}>
                          <label>QuestionId: 
                          <div><input type="number" name="qid" placeholder="Write question id" onChange={this.onChangeHA} required/></div>
                          </label>
                          <label>Answer: 
                          <div><input type="text" name="answer" placeholder="Write your answer" onChange={this.onChangeHA} required/></div>
                          </label>
                          <label>Username: 
                          <div><input type="text" name="user" placeholder="username" onChange={this.onChangeHA} required/></div>
                          </label>
                          <input type="submit"/>
                      </form>
                    </div>
                </div>
                    <Questions/>
                </>
        )
    }
}
