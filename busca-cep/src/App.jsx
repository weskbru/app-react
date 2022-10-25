import './App.css'
import {HiOutlineSearch} from 'react-icons/hi'


function App() {

  return (
    <div className="container">
      <h1 className="title">Buscado Cep</h1>
      <div className="containe-input">
        <input type="text" placeholder='Digite seu Cep' />
        <button className='button-input'> 
          <HiOutlineSearch size={25} color="#fff" />
        </button>
      </div>
      <main className='main'>
        <h2>Cep: 123901204</h2>
        <span>Reua teste</span>
        <span>complemento</span>
        <span>vila rosa</span>
        <span>campo barrp</span>
      </main>
    </div>
  );


}

export default App
