// import Button from "./Button";
// import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );


  
  // const [loading, setLoading] = useState(true);
  // const [coins, setCoins] = useState([]);
  // const [price, setPrice] = useState(0);
  // const [changePrice, setChangePrice] = useState(0);
  // const [currCoin, setCurrCoin] = useState(0);
  // const onChange = (event) =>  {
  //   setPrice(event.target.value);
  //   if((event.target.value / currCoin) > 0) {
  //     setChangePrice((event.target.value / currCoin).toFixed(10));
  //   }
  // }
  // const onCoinChange = (event) => {
  //   setCurrCoin(event.target.value);
  //   if((price / event.target.value) > 0) {
  //     setChangePrice((price / event.target.value).toFixed(10));
  //   }
  // }
  // useEffect(() => {
  //   fetch("https://api.coinpaprika.com/v1/tickers")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     setCoins(json)
  //     setLoading(false);
  //     console.log(json);
  //     setCurrCoin(json[0].quotes.USD.price);
  //   });
  // }, []);

  // return (
  //   <div>
  //     <h1>The Coins! ({coins.length})</h1>
  //     <input type="number" value={price} onChange={onChange}/>
  //     <p>{changePrice}</p>
  //     {loading ? <strong>Loading...</strong> : 
  //     <select onChange={onCoinChange}>
  //       {coins.map((coin) => 
  //       <option key={coin.id} value={coin.quotes.USD.price}>
  //         {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
  //       </option>)
  //       }
  //     </select>}
  //   </div>
  // );


  // const [toDo, setToDo] = useState("");
  // const [toDos, setToDos] = useState([]);
  // const onChange = (event) => setToDo(event.target.value);
  // const onSubmit = (event) =>  {
  //   event.preventDefault();
  //   if(toDo === "") {
  //     return;
  //   }
  //   setToDos(currentArray => [...currentArray, toDo]);
  //   setToDo("");
  // }
  
  // return (
  // <div>
  //   <h1>My To Dos ({toDos.length})</h1>
  //   <form onSubmit={onSubmit}>
  //   <input 
  //     onChange={onChange}
  //     value = {toDo} 
  //     type="text" 
  //     placeholder="Write your to do..." />
  //     <button>Add To Do</button>
  //   </form>
  //   <hr/>
  //   <ul>
  //     {toDos.map((item, index) => <li key={index}>{item}</li>)}
  //   </ul>
  // </div>
  // );



  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (event) => setKeyword(event.target.value);
  
  // useEffect(() => {
  //   console.log("I run only once");
  // }, []);
  // useEffect(() => {
  //   // if(keyword != "" && keyword.length > 5)
  //   console.log("I run when 'keyword' changes", keyword);
  // }, [keyword]);
  // useEffect(() => {
  //   console.log("I run when 'counter' changes", counter);
  // }, [counter]);
  // return (
  //   <div>
  //     <input onChange={onChange} type="text" placeholder="Search here..." value={keyword}/>
  //     <h1>{counter}</h1>
  //     <button onClick={onClick}>click me</button>
  //   </div>
  // );
}

export default App;
