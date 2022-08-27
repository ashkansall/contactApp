// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactDetail from './components/ContactDetail/ContactDetail';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';



function App() {

  // const [contacts, setContacts] = useState([]);

  // const AddContacttHandler = async(contact) => {
  //   // console.log(contact);
  //   try {
  //     const {data} = await addOneContacts(contact);
  //     setContacts([...contacts, data]);

  //   } catch (error) {}
  // }

  // const deleteContactHandler = async(id) => {

  //   // console.log('clicked', id); 
  //   try {
  //     await deleteContacts(id);

  //     const filteredContacts = contacts.filter((c) => c.id !== id);
  //     setContacts(filteredContacts);

  //   } catch (error) {console.log("error")}
  // }

  // useEffect(() => {
  //   // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   // if (savedContacts){
  //   //  setContacts(savedContacts);
  //   // }

  //   const fetchContacts = async() => {
  //     const {data} = await getContacts();
  //     setContacts(data);
  //   };
  //   try {
  //     fetchContacts(); 
  //   } catch (error) {}

  // }, []);
  
  
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);
  
  // const EditContacttHandler = async(contact, id) => {
  //   // put : id => update db
  //   try {
  //     await updateContact(id, contact);
  //     const {data} = await getContacts();
  //     setContacts(data)
  //     console.log(data);
      
  //   } catch (error) {}
  // }


  return (
    <main className="App">
      <h1>Contact App</h1>
      {/* routes */}
      <Routes>
        <Route path='/edit/:id' element={<EditContact />} />
        <Route path='/user/:id' element={<ContactDetail />} />
        <Route path="/" element={<ContactList />}/>
        <Route path="/add" element={<AddContact />}/>
      </Routes>
      {/* <AddContact AddContacttHandler={AddContacttHandler}/>
      <ContactList contacts={contacts} onDelete={deleteContactHandler}/> */}
    </main>
  );
}

export default App;
