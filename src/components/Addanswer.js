import React from "react";
import "./Addanswer.css";
import { Link } from "react-router-dom";
function Addanswer() {
  const [ques, setQues] = React.useState("");
  const [ans, setAns] = React.useState([]);
  const [add, setAdd] = React.useState([]);

  React.useEffect(() => {
    const savedInputData = JSON.parse(localStorage.getItem("data"));
    if (savedInputData) {
      setQues(savedInputData);
    }
  }, [ques]);

  return (
    <div id="ans">
      <img src="https://s.yimg.com/fz/api/res/1.2/zQmgKfpsyGj3OLKEANNyzw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7a7935de-98b7-3619-86a4-123e8c442ac7/t_500x300" />
      <div id="box">
        <div id="h">
          <h2>Select Question</h2>
          <ol>
            <li>{ques}</li>
            <p>{add}</p>
          </ol>
        </div>
        <input
          type="text"
          placeholder={ques}
          onChange={(e) => setAns(e.target.value)}
        />
        <br />
        <br />
      </div>

      <Link to="/home">
        <button id="btn3" type="submit">
          Cancel{" "}
        </button>
      </Link>
      <button id="btn4" onClick={() => setAdd(ans)}>
        Add answer
      </button>
    </div>
  );
}

export default Addanswer;
