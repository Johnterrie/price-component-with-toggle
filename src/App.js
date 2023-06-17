import React, {useState} from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(true);

  const ChangePrice = () => {
   setValue(!value);
  }


  return (
    <div className="App">
      <h1 className="heading">Our Pricing</h1>

      <div className="toggle-div">
        <p>Annually</p>
        <div onClick={ChangePrice} className={value ? "inner-toggle-div-right" : "inner-toggle-div"}>
          <div className="round-div"></div>
        </div>
        <p>Monthly</p>
      </div>

      <div className="main-container">
        <div className="white-div">
          <div className="innermost">
            <p>Basic</p>
            <h1>{value ? "$19.99" : "$199.99" }  </h1>
            <span className="span-div"></span>
            <p>500GB storage</p>
            <span className="span-div"></span>
            <p>2 User allowed</p>
            <span className="span-div"></span>
            <p>send up to 3gb</p>
            <span className="span-div"></span>
            <button className="button-div-white">LEARN MORE</button>
          </div>
        </div>

        <div className="middle-div">
          <div className="inner-div-too">
            <p>Professional</p>
            <h1>{value ? "$24.99" : "$249.99"}</h1>
            <span className="span-div"></span>
            <p>1TB storage</p>
            <span className="span-div"></span>
            <p>5 User allowed</p>
            <span className="span-div"></span>
            <p>send up to 3gb</p>
            <span className="span-div"></span>
            <button className="button-div-mid">LEARN MORE</button>
          </div>
        </div>

        <div className="white-div">
          <div className="innermost">
            <p>Master</p>
            <h1>{value ? "$39.99" : "$399.99"}</h1>
            <span className="span-div"></span>
            <p>2TB storage</p>
            <span className="span-div"></span>
            <p>10 User allowed</p>
            <span className="span-div"></span>
            <p>send up to 3gb</p>
            <span className="span-div"></span>
            <button className="button-div-white">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
