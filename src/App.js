import logo from './logo.svg';
import './App.css';
import Tesseract from 'tesseract.js';
import {useState} from 'react' ;

function App() {
  const [img,newimg]=useState();
  const handlesubmit=()=>{
    Tesseract.recognize(
      img,
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      let ig=document.createElement("p")
      ig.innerHTML=`<div >
        <p>hello ${text}</P>
        </div>`
      let bd=document.getElementById('content')
      bd.appendChild(ig)
      console.log(text);
    })
    .catch=(e)=>{
      console.log(e)
    }
  }
  const hangleImg=(e)=>{
    const [file] = e.target.files;
    newimg(URL.createObjectURL(file));
  }
  return (
    <div className="App">
      <div id='content'>
        <input type="file" onChange={(event) => {
                  hangleImg(event)
                }}/>
        <button onClick={handlesubmit}>submit</button>
      </div>
    </div>
  );
}

export default App;
