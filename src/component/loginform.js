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
        let askby=localStorage.getItem('username');
        // let text=document.getElementById('content-text-text');
        axios.post('https://600e587a3bb1d100179dee45.mockapi.io/quesandans',{ques,askby})
        .then(res=>{
            // console.log(res.data);
            // alert("Question added");
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
        let ansby = localStorage.getItem("username");
        axios.put('https://600e587a3bb1d100179dee45.mockapi.io/quesandans/'+qid,{ans,ansby})
        .then(res=>{
        // console.log(res.data);
        window.location.reload();
        })
        
    }
    render() {
        return (
          <>
            <div id="content" className="container-fluid">
              <div className="text-center text-primary">
                <h3>Question and Answer Platform</h3>
              </div>
              <div id="content-form">
                <form className="container-fluid" onSubmit={this.onSubmitH}>
                  <textarea
                    className="form-control mb-3"
                    type="text"
                    name="question"
                    placeholder="Write your question"
                    onChange={this.onChangeH}
                    required
                  ></textarea>
                  <div className="text-center">
                    <input className="btn btn-primary" type="submit" />
                  </div>
                </form>
              </div>
              <div id="content-form">
                <form className="container-fluid"  onSubmit={this.onSubmitHA}>
                  <label className="form-label">
                    QuestionId:
                    <div>
                      <input
                        className="form-control"
                        type="number"
                        name="qid"
                        placeholder="Write question id"
                        onChange={this.onChangeHA}
                        required
                      />
                    </div>
                  </label><br/>
                  <label className="form-label w-100">
                    Answer:
                    <div>
                      <textarea
                        className="form-control"
                        type="text"
                        name="answer"
                        placeholder="Write your answer"
                        onChange={this.onChangeHA}
                        required
                      >
                        </textarea>
                    </div>
                  </label>
                  <div className="text-center">
                    <input className="btn btn-primary" type="submit" />
                  </div>
                </form>
              </div>
            </div>
            <Questions />
          </>
        );
    }
}
