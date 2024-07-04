import './App.css';
import Book from './components/Book';
import MyForm from './components/MyForm';

function App() {
  const handleClick = () => {
    alert("You clicked on me.")
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <br />
      <Book text={"Click Me"} onClick={handleClick} status={true} />
      <br />
      <MyForm/>
    </div>
  );
}

export default App;
