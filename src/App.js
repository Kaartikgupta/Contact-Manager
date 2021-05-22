import { Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout'
import Main from './Container/Main/Main'
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/add" component={Main}></Route>
          <Route path="/about" component={Main}></Route>
        </Switch>
      </Layout>
      
      
    </div>
  );
}

export default App;
