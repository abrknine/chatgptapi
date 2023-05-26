import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='App'> 
       <aside className='sidemenu '>
        <div className='side-menu-button'>
          <span>+</span>
             New-chat
        </div>
       </aside>
       <section className='chatbox'>
          <div className='chat-log'>
            <div className='chat-message'> 
              <div className='avatar'>
                
    me
              </div>
              <div className='message'>
  hello
              </div>
            </div>

          </div>
        <div className='chat-input-holder'>
          <textarea className='chat-input-textarea' placeholder='Text your message here'></textarea>

        </div>
       </section>
      

    </div>
  )
}

export default App
