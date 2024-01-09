
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import {originals,action,comedy}from './urls'



function App() {
  return (
  
      <div className="App">
       <NavBar/>
       <Banner/>
       <RowPost title='Netflix Originals' url={originals}/>
       <RowPost title='Actions' isSmall url={action}/>
       <RowPost title='Comedy ' isSmall url={comedy}/>
      </div>
      
    
  );
}

export default App;
