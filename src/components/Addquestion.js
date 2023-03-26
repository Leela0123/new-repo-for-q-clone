import React from "react";
import "./Addquestion.css";
import { Link } from "react-router-dom";
function Addquestion() {
  const [ques, setQues] = React.useState([]);

  const handleSubmit = (event) => {
    setQues(event.target.value);
  };

  return (
    <div id="ans">
      <img src="https://s.yimg.com/fz/api/res/1.2/zQmgKfpsyGj3OLKEANNyzw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7a7935de-98b7-3619-86a4-123e8c442ac7/t_500x300" />
      <div id="head">
        <input
          type="text"
          placeholder="Question : Type your question here"
          onChange={handleSubmit}
          value={ques}
        />
        <br />
        <br />
        <Link to="/home">
          <button id="btn1" type="submit">
            Cancel
          </button>
        </Link>
        <button
          id="btn2"
          onClick={() => localStorage.setItem("data", JSON.stringify(ques))}
        >
          Add question
        </button>
      </div>
    </div>
  );
}

export default Addquestion;
