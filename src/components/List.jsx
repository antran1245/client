import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';
import { useContext } from "react";
import { Wrapper } from "./context/Wrapper";

export default function List(props) {
    const {title, _id } = props.item
    const navigate = useNavigate();
    const {setRefresh, refresh} = useContext(Wrapper);
    
    const linkDetail = () => {
        navigate(`/${_id}`)
    }

    const update = () => {
        navigate(`/${_id}/edit`)
    }

    const deleteFunction = async() => {
        try {
            await axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
        } catch (err) {
            console.log(err)
        }
        setRefresh(!refresh)
        navigate('/')
    }
    return(
        <div className="product-listing">
            <p onClick={linkDetail}>{title}</p>
            <div className="buttonBar">
                <button onClick={update}>Edit</button>
                <button onClick={deleteFunction}>Delete</button>
            </div>
        </div>
    );
}