import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImage from "../../../assets/images/user.png";

const Contact = ({ contact, onDelete }) => {

    const navigate = useNavigate();

    const shareData = () => {
        navigate(`user/${id}`, {state: {contact: contact}});
    }
    
    const { name, email, id } = contact;
    return ( 
        <div key={id} className="item">
            <img alt="user" src={userImage}/>
             <a onClick={() => shareData()}>
                <p>name : {name}</p>
                <p>email : {email}</p>
             </a>
             <Link to={`/edit/${id}`}>
                <button>Edit</button>
             </Link>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
     );
}
 
export default Contact;