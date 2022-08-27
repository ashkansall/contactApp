import { Link, useLocation } from "react-router-dom";
import "../AddContact/AddContact.css"

const ContactDetail = () => {

    const location = useLocation();
    console.log(location);

    return ( 
        <div className="fromContainer">
            <div className="inner-contact">
                <p>userName is : {location.state.contact.name}</p>
                <p>userEmail is : {location.state.contact.email}</p>
                <Link to="/">see contact lists</Link>
            </div>
        </div>
     );
}
 
export default ContactDetail;