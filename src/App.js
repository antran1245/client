import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import { Wrapper } from './components/context/Wrapper';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const axiosCall = async() => {
      const resp = await axios.get('http://localhost:8000/api/products');
      setProducts(resp.data.message)
      console.log(resp.data.message)
    }
    axiosCall()
    .catch(err => console.log(err))
  }, [refresh]);

  return (
    <div className="App">
      <Wrapper.Provider value={{products, refresh, setRefresh}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/:id" element={<Detail/>} />
            <Route path="/:id/edit" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </Wrapper.Provider>
    </div>
  );
}

export default App;
