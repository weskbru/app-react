import {useState} from 'react'
import './App.css'
import {HiOutlineSearch} from 'react-icons/hi'
import api from './services/api'

function App() {

  const [input ,setInput] = useState('');
  const [cep, setCep] = useState({});

 async function searchCep() {
  if(input === ''){
    alert('Preencha algum cep valido')
    return;
  }

  try {
    const response = await api.get(`${input}/json`);
    setCep(response.data)
    setInput('')
  } catch{
    alert("ops erro")
    setInput("")
  }
}


  return (
    <div className="container">
      <h1 className="title">Buscado Cep</h1>

      <div className="containe-input">
        <input type="text" placeholder='Digite seu Cep' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className='button-input' onClick={searchCep}> 
          <HiOutlineSearch size={25} color="#fff" />
        </button>

      </div>

      <main className='main'>
        <h2>Cep: {cep.cep}</h2>
        <span>logradouro: {cep.logradouro}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Uf: {cep.uf}</span>
        <span>ddd: {cep.ddd}</span>
      </main>

    </div>
  );

}

export default App
