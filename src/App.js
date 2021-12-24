import React ,{useState} from 'react'
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./components/pages/Home/Home";
import Quiz from "./components/pages/Quiz/Quiz";
import './App.css';


function App() {

  const [name,setName] = useState("");




  return (


    <BrowserRouter>

    <div className='app' style={{}}>
    <Header />

    <Switch>

      <Route path = '/' exact >
        <Home name = {name} setName = {setName} />
      </Route>

      <Route path = '/quiz' exact>
       <Quiz />
      </Route>

     </Switch>

    </div>

    <Footer />

    </BrowserRouter>
  );
}

export default App;
