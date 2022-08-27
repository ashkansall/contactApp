import "./ContactList.css";
import { Link, useParams } from "react-router-dom";
import Contact from "./Contact/Contact";
import getContacts from "../../services/getContactsService";
import { useEffect, useState } from "react";
import deleteContacts from "../../services/deleteContactService";

const ContactList = () => {
    
    const [contacts, setContacts] = useState(null);
    const [allContacts, setAllContacts] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
        // if (savedContacts){
        //  setContacts(savedContacts);
        // }
    
        const fetchContacts = async() => {
          const {data} = await getContacts();
          setContacts(data);
          setAllContacts(data);
        };
        try {
          fetchContacts(); 
        } catch (error) {}
    
      }, []);

      const deleteContactHandler = async (id) => {
          console.log(id);

        try {
          await deleteContacts(id);
          const filteredContacts = contacts.filter((c) => c.id !== id);
          setContacts(filteredContacts);

        } catch (error) {console.log(error)}
      }

      const searchHandler = (e) => {
        setSearchTerm(e.target.value);
        const search = e.target.value;
        // filter contacts
        if (search !== "") {
            const filteredContacts = allContacts.filter(c => {
                // console.log(Object.values(c).join(" - "));
                return Object.values(c).join(" - ").toLowerCase().includes(search.toLowerCase());
            });
            setContacts(filteredContacts);
        }else {
            setContacts(allContacts);
        }
      }
    return ( 
        <section className="listWrapper">
            <div className="contactList">
                <div className="listHeader">
                    <h2>My Contacts</h2>
                    <Link to="/add">
                        <button className="listButton">Add your contacts</button>
                    </Link>
                </div>
                <div>
                    <input type="text" value={searchTerm} onChange={searchHandler} placeholder="Search..."/>
                </div>

                {contacts ? contacts.map((contact) => {
                    // const { name, email, id } = contact;
                    return (
                        <Contact contact={contact} onDelete={deleteContactHandler} key={contact.id}/>
                    )
                }) : <p>Loading...</p>}
            </div>
        </section>
     );
}
 
export default ContactList;