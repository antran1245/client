import {useContext, useState} from 'react';
import axios from 'axios';
import '../App.css';
import { Wrapper } from './context/Wrapper';

export default function Form(props) {
    const {setRefresh, refresh} = useContext(Wrapper);
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/products/new', form)
        } catch (err) {
            console.log(err)
        }
        e.target.reset();
        setRefresh(!refresh);
    }
    return(
        <div>
            <h1>Product Manger</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" onChange={(e) => setForm({...form, title:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="price">Price: </label>
                    <input type="number" name='price' onChange={(e) => setForm({...form, price:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' onChange={(e) => setForm({...form, description:e.target.value})}/>
                </div>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}