import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getOneContact from "../../services/getOneContact";
import updateContact from "../../services/updateContact";
import getContacts from "../../services/getContactsService";
// import "./AddContact.css"

const EditContact = () => {
    const params = useParams();
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
        // EditContacttHandler(contact, params.id);
        try {
            await updateContact(params.id, contact);
            // await getContacts();
            Navigate("/", { replace: true })
          } catch (error) {}
        // after add => push to home page
    }
    
    useEffect(()=> {
        // const localFetch = async() => {
            
        //     try {
                
        //         const {data} = await getOneContact(params.id);
        //         setContact({name: data.name, email: data.email});
    
        //     } catch (error) {}
        // }
        // localFetch();

        // re-factor using then-catch

        getOneContact(params.id)
        .then(res => setContact({name: res.data.name, email: res.data.email}))
        .catch(err => console.log(err));
    }, []);


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
            <button type="submit">Edit Contact</button>
        </form>
        </div>
     );
}
 
export default EditContact;