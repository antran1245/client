import react, {useState} from 'react';
import axios from 'axios';

export default function Form() {
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', form)
        .then(res => console.log(res))
    }
    return(
        <div>
            <h1>Product Manger</h1>
            <form>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" onChange={(e) => setForm({...form, title:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" name='price' onChange={(e) => setForm({...form, price:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' onChange={(e) => setForm({...form, description:e.target.value})}/>
                </div>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}