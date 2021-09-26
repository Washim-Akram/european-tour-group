import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import UserContainer from './components/UserContainer/UserContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UserContainer></UserContainer>
    </div>
  );
}

export default App;
