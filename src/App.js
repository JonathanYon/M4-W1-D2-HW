// import logo from './logo.svg';
import './App.css';
import MyFooter from './component/MyFooter';
import MyNavBar from './component/MyNavBar';
import Jumbo from './component/Jumbo';
import Fantasy from './component/Fantasy';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Jumbo />
      <Fantasy />
      <MyFooter />
    </div>
  );
}

export default App;
