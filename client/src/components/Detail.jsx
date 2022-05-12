import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../App.css';
import { Wrapper } from "./context/Wrapper";

export default function Detail() {
    const [detail, setDetail] = useState({});
    let {id} = useParams();
    const navigate = useNavigate();
    const {setRefresh, refresh} = useContext(Wrapper);

    useEffect(() => {
        const axiosCall = async() => {
            const resp = await axios.get(`http://localhost:8000/api/products/${id}`)
            setDetail(resp.data.message)
        }
        axiosCall()
        .catch(err => console.log(err))
    }, [])

    const update = () => {
        navigate(`/${id}/edit`)
    }

    const deleteFunction = async() => {
        await axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        setRefresh(!refresh)
        navigate('/')
    }

    return(
        <div className="detail">
            <p>{detail.title}</p>
            <p>Price: ${detail.price}</p>
            <p>Description: {detail.description}</p>
            <div className="buttonBar">
                <button onClick={update}>Edit</button>
                <button onClick={deleteFunction}>Delete</button>
            </div>
        </div>
    );
}