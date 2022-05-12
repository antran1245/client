import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Update() {
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })
    let {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const axiosCall = async() => {
            const resp = await axios.get(`http://localhost:8000/api/products/${id}`)
            setForm(resp.data.message)
        }
        axiosCall()
        .catch(err => console.log(err))
    }, [])

    const handleUpdate = async(e) =>{
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/products/update/${id}`, form)
        } catch (err) {
            console.log(err)
        }
        e.target.reset();
        navigate('/');
    }

    return(
        <form onSubmit={handleUpdate}>
            <div className='form-group'>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" onChange={(e) => setForm({...form, title:e.target.value})} value={form.title}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="price">Price: </label>
                    <input type="number" name='price' onChange={(e) => setForm({...form, price:e.target.value})} value={form.price}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' onChange={(e) => setForm({...form, description:e.target.value})} value={form.description}/>
                </div>
                <button type='submit'>Update</button>
        </form>
    );
}