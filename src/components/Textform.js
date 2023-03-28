import React ,{useState} from 'react'


export default function Textform(props) {
    const handleupclick=(event)=>{
        // console.log("uppercase button was clicked");
        event.preventDefault();
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }
    const handlelowclick=(event)=>{
      // console.log("uppercase button was clicked");
      event.preventDefault();
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success")
   
  }
  const handlecopyclick=(event)=>{
   
    event.preventDefault();
    let text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success")
   
}
const handlespaceclick=(event)=>{
  
  event.preventDefault();
  let newText=text.split(/[ ]+/);
setText(newText.join(" "));
 

}
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text,setText]=useState('');
        // textt.text="new text";
    //    ( {newtexttt},setText("newtext"))
        // setText("newtext");
    
  return (
    <>
    <form>
   
  
     <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
     <h1>{props.heading}</h1>

    <div className="mb-3">
      
      <textarea className="form-control" id="mybox" onChange={handleOnChange.bind()} rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handlelowclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handlecopyclick}>Copy text</button>
    <button className="btn btn-primary mx-1" onClick={handlespaceclick}>Remove extra spaces</button>
  
     </div>
  </form>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
   <h2>Your Text Summary</h2>
   <p>{text.split(" ").length} words and {text.length} characters</p>
   <p>{ 0.008 * text.split(" ").length} time to read</p>
   <h2>preview</h2>
   <p>{text.length>0?text:"Enter Something to preview"}</p>
  </div>
  </>

  )
}
