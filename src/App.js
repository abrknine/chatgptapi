import React , { useEffect } from "react";
import "./App.css";

const App = () => {

  const getMessages= async()=>{
    const options ={
      method:"POST",
      body: JSON.stringify({
               
               prompt:[{role:"user", content: "how are you"}]
              
      }),
      headers:{
          
          "Content -Type":"application/json"
      }
  }
       try{
           const response= await fetch('http://localhost:8000/completions',options)
           const data= await  response.json();
           console.log(data);
       }
       catch(error){
        console.log(error);

       }
  }
  useEffect(() => {
    getMessages(); 
  }, []);




  return (
    <div className="App">
      <aside className="sidemenu ">
        <div className="side-menu-button">
          <span>+</span>
          New-chat 
        </div>
        <ul className="history">
           <li>abh</li>
        </ul>
        <nav>
            <p>made by abhi</p>
           </nav>
      </aside>




      <section className="chatbox">
          <h1>Made by abhi</h1>
          <ul className="feed ">

          </ul>
          <div className="bottom-section">

        <div className="chat-input-holder">
          <textarea
            className="chat-input-textarea"
            placeholder="Text your message here"
          ></textarea>
          <div id="submit" onClick={getMessages}>&rarr;</div>

        </div>

        <p className="info"> Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version </p>
          </div>
      </section>
    </div>
  );
};

export default App;
