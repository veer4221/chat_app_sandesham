import logo from './logo.svg';
import './App.css';
import imagelogo from "./images/logo.png"
import Sidebar from './componunts/Sidebar';
import Chat from './componunts/Chat';

function App() {
  return (
    <div className="app">
    
     {/* <h1>hello Sandesham</h1> */}
     <div className="app__body">
       {/* { Sidebar} */}
       <Sidebar/>
       {/* { chat } */}
       <Chat/>
     </div>
    </div>
  );
}

export default App;
