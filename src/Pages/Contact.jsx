import React,{useState} from 'react'


export function Contact() {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  return (
    <div>
       
       <header>

          <form>
            <h1>Send EMail</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input onChange= {(e) => setEmail(e.target.value)} type="email" ></input>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input 
                id="subject"
                type="text"
                onChange= {(e) => setSubject(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="subject">Message</label>
              <textarea 
                id="message"
                onChange= {(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button    type="submit">Submit</button>

            </div>



            
          </form>


       </header>
    </div>
  )
}