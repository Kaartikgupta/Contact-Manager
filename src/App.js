import { Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout'
import ContactAdd from './Container/Contact-Add/Contact-Add'
import Contacts from './Container/Contacts/Contacts'
import EditContact from './Component/Contact/EditContact/EditContact'
import About from './Component/About/About'
function App() {
  return (
    <div className="App">
      <Layout>
        
        <Switch>
          <Route path="/add" component={ContactAdd}></Route> 
          <Route path="/about" component={About}></Route>
          <Route path="/contact/edit"  component={EditContact}></Route>
          <Route path="/" exact component={Contacts}></Route>
        </Switch>
       
      </Layout>
      
      
    </div>
  );
}

export default App;
