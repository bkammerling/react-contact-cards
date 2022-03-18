import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ContactCard from './components/Card/Card';


import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [dark, setDark] = useState(false);

  const sortContacts = () => {
    const property = sorted ? 'id' : 'first_name';
    contacts.sort((a,b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0))
    setSorted(!sorted);
    setContacts(contacts);
  }
  
  useEffect(() => {
    // get out data from our contact json
    const fetchContacts = async () => {
      fetch('/contact-data.json')
        .then(response => response.json())
        .then(data => {
          // add those contacts to the state
          setContacts(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    fetchContacts();

    return () => {
    }
  }, [])
  

  return (
    <div className={`App ${dark ? 'dark' : ''}`}>
      <Header 
        sortContacts={sortContacts} 
        sorted={sorted}
        dark={dark}
        setDark={setDark}
      />
      <main>
        {/* Add the contact cards here */}
        { contacts.map(c => <ContactCard contact={c} dark={dark} />)}
      </main>
    </div>
  );
}

export default App;
