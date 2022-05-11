import { useContext } from 'react';
import Form from './Form';
import List from './List';
import { Wrapper } from './context/Wrapper';

export default function Main() {
    const {products} = useContext(Wrapper);
    return(
        <div>
            <Form/>
            <hr></hr>
            <h2>All Products:</h2>
            {products.map((item, i) =>
            <List key={i} item={item}/>
            )}
        </div>
    );
}