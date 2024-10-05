import logo from './logo.svg'
import './App.scss'
import MyComponent from './Example/MyComponent'
import ListTodo from './Todos/ListTodo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navigation from './Navigation/Navigation'
import Home from './Example/Home'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>
          {/* <MyComponent /> */}
          {/* <ListTodo /> */}

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
