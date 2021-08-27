import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <mainPage/>
      <Welcome name="Shaun" />
    </div>
  );
}

export default App;
