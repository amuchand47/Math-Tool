import React, { useState } from "react";
import { MathComponent } from "mathjax-react";

export default function TextForm(props) {
 
  // clearing the text

  const handleClearClick = () => {
    let lowerText = "";
    setText(lowerText);
  };

  // replace all the left , right & \ from text
  
  const convertYours = () => {
    let mytxt = text;
    let a1 = mytxt.replaceAll("\\left", "");
    let a2 = a1.replaceAll("\\right", "");
    let a3 = a2.replaceAll("\\tiny", "");
    let a4 = a3.replaceAll("\\:", " ");
    setText(a4);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (

    <div className="shadow-sm p-3 mb-5 rounded" style={{background: "#cae5fa"}}>
  
       <p className="h3">{props.heading}</p>
       
      <div className="mb-3 mt-4">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" placeholder="Enter your text here"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-success mx-2" onClick={convertYours}>
        Convert 
      </button>

      <div className="bd-clipboard">
        <div className="mt-5">
          <div className="h3">Results</div>
           <p className="shadow-sm p-3 mt4 mb-4 rounded" style={{background: "white"}}>{text} </p>
          <h3>Latext Preview</h3> 
          <div className="shadow p-3 mt-4 bg-white text-dark rounded ">
            <MathComponent tex={String.raw`${text}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
