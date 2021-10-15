import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CheckOut from './components/CheckOut';
import Login from './components/Login';
import {useEffect} from 'react'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
function App() {
  const[{}, dispatch] = useStateValue();
    useEffect(()=> {
      auth.onAuthStateChanged(authUser=>{
        console.log( authUser);
        if(authUser){
            dispatch({
              type: 'SET_USER',
              user: authUser,

            })
        }
        else {
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
    },[])
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/">
      <Header/>
      <Home/>
      </Route>
      <Route path= "/login">
        <Login/>
        </Route>
      <Route path= "/checkout">
        <Header/>
        <CheckOut/>
      </Route>
      <Route path="/payment">
        <Payment/>
      </Route>
      </Switch>
    </div>
    </Router>

  );
}
export default App;
