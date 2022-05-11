import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App.css';

export default function Detail() {
    const [detail, setDetail] = useState({});
    let {id} = useParams();
    useEffect(() => {
        const axiosCall = async() => {
            const resp = await axios.get(`http://localhost:8000/api/products/${id}`)
            setDetail(resp.data.message)
        }
        axiosCall()
        .catch(err => console.log(err))
    }, [])
    return(
        <div className="detail">
            <p>{detail.title}</p>
            <p>Price: ${detail.price}</p>
            <p>Description: {detail.description}</p>
        </div>
    );
}