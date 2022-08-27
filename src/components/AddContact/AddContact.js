import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./AddContact.css"
import addOneContacts from "../../services/addContactService";

const AddContact = () => {
    const Navigate = useNavigate();
       
    const [contact, setContact] = useState({ name: "", email: "" });

    const changeHandler = (e) => {
        setContact({...contact, [e.target.name]: e.target.value});
    }

    const submitForm = async(e) => {
        
        if(!contact.name || !contact.email) {
            alert('all fields are mandatory');
            return;
        }
        e.preventDefault();
        // AddContacttHandler(contact);

        try {
             await addOneContacts(contact);
            // setContacts([...contacts, data]);
            setContact({name: "", email: ""});
            Navigate("/", { replace: true })
      
          } catch (error) {}

        // after add => push to home page
    }
    
    
    return ( 
        <div className="fromContainer">
            <form onSubmit={submitForm}>
            <div className="formControl">
                <label>name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={contact.name} 
                    onChange={changeHandler} 
                />
            </div>
            <div className="formControl">
                <label>email</label>
                <input 
                    type="text" 
                    name="email" 
                    value={contact.email} 
                    onChange={changeHandler} 
                />
            </div>
            <button type="submit">Add Contact</button>
        </form>
        </div>
     );
}
 
export default AddContact;