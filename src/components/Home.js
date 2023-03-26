import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Header = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");
  const [ques, setQues] = useState("");

  let questionAndAnswers = [
    {
      id: "1",
      answeredBy: "kamal rastogi",
      questionedBy: "arun tiwari",
      question: "What is the famous food of Agra?",
      answer: "Petha is the famous sweet of Agra",
    },
  ];

  let users = [
    {
      username: "kamal rastogi",
      password: "12345",
      email: "hello@gmail.com",
    },
  ];

  let question= [
    {
     question: "What is the famous food of Agra?",
    },
    {
      question: "What is the famous food of Lucknow?",
     },
     {
      question: "What is the famous food of Delhi?",
     },
     {
      question: "What is the famous food of Kanpur?",
     },

  ];
  return (
    <div>
      <header id="main">
        <img src="https://s.yimg.com/fz/api/res/1.2/zQmgKfpsyGj3OLKEANNyzw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7a7935de-98b7-3619-86a4-123e8c442ac7/t_500x300" />
        <input
          style={{ width: "600px" }}
          type="search"
          placeholder="Type your questions here....."
          onChange={(e) => setInput(e.target.value)}
        />
        <Link to="/addquestion">
          <button>Add Question</button>
        </Link>

        <Link to="/addanswer">
          <button>Add Answer</button>
        </Link>

        <Link to="/">
          <button>Logout</button>
        </Link>
      </header>
      <div id="mainPart">
        <div id="userList">
          {questionAndAnswers.map((e) => {
            return (
              <>
                <div id="use">
                  <img
                    id="im"
                    src="https://wallpapercave.com/wp/wp2521772.jpg"
                  ></img>
                  <h3 key={e.id}>{e.questionedBy}</h3>
                </div>
                <h3 key={e.id}>AnsweredBy : {e.answeredBy}</h3>
                <h3 key={e.id}>QuestionedBy : {e.questionedBy}</h3>
                <h3 key={e.id}>Question : {e.question}</h3>
                <h3 key={e.id}>Answer : {e.answer}</h3>
              </>
            );
          })}
<hr/>
<div id="userList">
          {questionAndAnswers.map((e) => {
            return (
              <>
                <div id="use">
                  <img
                    id="im"
                    src="https://images.alphacoders.com/706/thumb-1920-706181.jpg"
                  ></img>
                  <h3 key={e.id}>{e.answeredBy}</h3>
                </div>
                <h3 key={e.id}>AnsweredBy : {e.answeredBy}</h3>
                <h3 key={e.id}>QuestionedBy : {e.questionedBy}</h3>
                <h3 key={e.id}>Question : {e.question}</h3>
                <h3 key={e.id}>Answer : {e.answer}</h3>
              </>
            );
          })}
        </div>
        <hr/>
<div id="userList">
          {questionAndAnswers.map((e) => {
            return (
              <>
                <div id="use">
                  <img
                    id="im"
                    src="https://c.stocksy.com/a/IpI600/z9/1502340.jpg"
                  ></img>
                  <h3 key={e.id}>{e.answeredBy}</h3>
                </div>
                <h3 key={e.id}>AnsweredBy : {e.answeredBy}</h3>
                <h3 key={e.id}>QuestionedBy : {e.questionedBy}</h3>
                <h3 key={e.id}>Question : {e.question}</h3>
                <h3 key={e.id}>Answer : {e.answer}</h3>
              </>
            );
          })}
        </div>
        </div>
        
        <div id="quesAns">
          <h2>Questions List</h2>
          <hr />
          <ol>
           {question.map((e)=>{
            return <h3><li>{e.question}</li></h3>
           })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Header;
