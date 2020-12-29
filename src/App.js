import React ,{useState} from "react";
import Counter from "./Counter";
import './App.css';
import "./Styling.css";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import CodeIcon from '@material-ui/icons/Code';
import ImageIcon from '@material-ui/icons/Image';
import SignupButton from "./SignupButton";
import HelpIcon from '@material-ui/icons/Help';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import RedoIcon from '@material-ui/icons/Redo';
import UnduIcon from '@material-ui/icons/Undo';

function App(props){

    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)


    function getData(val)
    {
      setData(val.target.value)
      setPrint(false)
      console.log(val.target.value)

    }
    
    const search = {
      color: 'grey',
      width:800,
      fontSize: 20
    };


    return (
      <div className="App">

        {/* CUTE ORANGE LINE AT THE TOP */}
        <div className="cuteLine"></div>
        

        {/* HEADER */}
        <div className="header">  
        <div className="topics">
        <img src="https://i.ibb.co/bLwQkqc/Copy-of-Online-Music-Show-Facebook-Shared-Image-Made-with-Poster-My-Wall.jpg"></img>       
        <small>
        <span>About</span>
        <span>Products</span>
        <span>For Teams</span>
        </small>
       
        </div>
        <input type="search" style={search} id="gsearch" name="gsearch" placeholder="🔍 Search" ></input>
        
        
        <div className="closes">

        <LoginButton />
        <Profile/>&nbsp;
        <SignupButton/>

        <LogoutButton/>&nbsp;&nbsp;
        </div>

        </div>
      
      {/* QUESTION TITLE */}
      <div className="questionTitle">
      <h1>Recognize more than one character?</h1>  
      <p>
      <small>
      Asked <strong>today</strong> &nbsp;
      Active <strong>today</strong>&nbsp;
      Viewed <strong>10 times</strong>
      </small>
      </p>
      <button type="button" class="btn btn-primary">Ask a question</button>
      <hr size="1" />
      </div>
      


      {/* POSTED QUESTION */}
      <div className="questionPart">
        <Counter/>  

          <p>
            I'm very new to coding and can't seem to figure out how to get this to print the bake name I know its because its 
            trying to recognize a singular character but I don't know how to make it recognize more than one.I'm ve
            trying to recognize a singular character but I don't know how to make it recognize more than one.I'm verts 
            trying to recognize a singular character but I don't know how to make it recognize more than one.

          </p>
      </div>



       {/* PROBLEMATIC CODE */}
<div className="codePart">
        <code>
          public static void main(String[] args) 

          int ingredients = 5+4+9+8+201+200+202+2+1+203;
          char 
          public static void main(String[] args) 

          int ingredients = 5+4+9+8+201+200+202+2+1+203;
          char 
          public static void main(String[] args) 

          int ingredients = 5+4+9+8+201+200+202+2+1+203;
          char 
          if (ingredients = 835) 
        </code>
</div>

<br/>

      {/* ANSWERING SECTION */}
<div className="myAnswer">
  <h4>Your Answer</h4>
  <br/>
    <FormatBoldIcon/>
    <FormatItalicIcon/>
    <InsertLinkIcon/>
    <CodeIcon/>
    <ImageIcon/>
    <FormatAlignCenterIcon/>
    <FormatAlignLeftIcon/>
    <UnduIcon/>
    <RedoIcon/>
    <HelpIcon/>
<div>

  <br/>

<textarea type="text" onChange={getData}/>
<br/>
<br/>
<button type="button" class="btn btn-primary"  
onClick={()=>setPrint(true)}>Post Your Answer</button>
            

<br/>


      {/* POSTED ANSWER */}
<hr/>

  <div className="answerContainer">
     <Counter/>
        {
          print?
          <h1>{data}</h1>:null
        }
  </div>

<hr/>

</div>
  </div>
      </div>
    )
  }
  
export default App;
