import {useState,useEffect} from 'react'

import {} from './styles.css';

import List from './List';
import Form from './Form';

function Contacts() {

  const [contacts,setContacts] = useState([
    {
      firstname:"Mehmet",
      phone_number:'253453'
    },
    {
      firstname:"Ayse",
      phone_number:'2534'
    },
    {
      firstname:"Elif",
      phone_number:'253454'
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addcontact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;