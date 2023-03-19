//type rfc
import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=() => {
    console.log("Uppercase was clicked" + text);
    // setText("You have clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success")

  }
  const handleLoClick=() => {
    console.log("Lowercase was clicked" + text);
    // setText("You have clicked on handleUpClick");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LoweCase!","success")

  }

  const handleOnChange =(event) =>{   
    console.log("On change");
    setText(event.target.value) //enable the edit and keep updating the text while changing
  }
  
  //to clear text
  const clearText =() => {
    let newText = "";
    setText(newText);

    props.showAlert("Texts are cleared!","primary")
  }

  //to copy text
  const handleCopy =() =>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value)

    props.showAlert("Copied the Texts!","success")
  }

  //used javascript regex
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))

    props.showAlert("Extra spaces are removed!","success")

  }
  function length(){
    if(text.length>0){
    return (text.trim().split(" ").length)    //trim removes white spaces
    }
    else
    return '0'
}


  const [text, setText] = useState('');
  //text="Hi"; Wrong way to change the state
  //setText("New text"); Correct way to change the state

  //<div style={{color: props.mode==='dark'?'white':'#042743'}}> If mode is dark then text color is white warna(else) #042743
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={clearText}> Clear Text </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>

    </div>
    <div className="containter my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
<h2> Your text summary</h2>
<p> {length()} words and {text.length} characters</p>
<p> {0.008 * text.split(" ").length} Minutes read</p>
<h2> Privew </h2>
<p> {text.length>0?text:"Enter something in the textbox above to preivew it here"} </p>
{/* If text length only above 0 then only write the text otherwise print the line */}

    </div>
    </>
  )
}
