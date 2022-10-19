import React, {useState} from 'react'
export default function TextForm(props) {
  
const handleClearClick = ()=>{
    let lowerText = "";
    setText(lowerText);
} 

const convertYours = ()=>{
    
    let mytxt = text;
    let a1 = mytxt.replaceAll("\\left", "");
    let a2 = a1.replaceAll("\\right", "");
    let a3 = a2.replaceAll("\\tiny", "");
    let a4 = a3.replaceAll("\\:", " ");
    setText(a4);
} 

const handleOnChange = (event)=>{
    setText(event.target.value);
}  

const [text, setText] = useState(''); 

 return (
    <div>

       <h1>{props.heading}</h1>

        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-danger mx-2" onClick={convertYours}>All Clear</button>

        <div className="bd-clipboard">
              
          <div className="mt-5">
              <h1> You Text Summary</h1> 
              <p> Number of words are: {text.split(" ").length} and the total characters: {text.length}</p>
              <p>{0.008*text.split(" ").length} mins read</p>
              <h2>Preview</h2> 
              <p>{text}</p>
          </div>

        </div>

    </div>
  )
}
