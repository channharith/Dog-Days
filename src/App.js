import Calendar from './Calendar'
import { useEffect, useState } from 'react'



function App() {
  // const api_key = process.env.REACT_APP_GIPHY_KEY
  // const url = `https://api.thecatapi.com/v1/images/search?api_key=${api_key}`;
  // const url = 'https://api.thecatapi.com/v1/images/search?api_key=live_37fHdgA0fShUu6KOYXr2SYAt38uuBEMuVlEHJk7H8m1HwfGlDbKQzmFHt1oYngqU'
  // // console.log(api_key);
  // const [cat, setCat] = useState({})
  //it has to be Camel Case 
  // console.log(url);
  // function GetACat() {

  //   fetch(url)
	// 	.then((res) => {
  //     setCat(res)

  //     //setting cat to res
	// 		return res.json();
	// 	})
	// 	.then((res) => {
	// 		console.log(res);
  //     console.log(cat.url);
  //     //console logging cat to check information
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});

  // }

  // useEffect (() => {
  //   GetACat()
  // },[])

  return (
    <div className="App">
      <Calendar/>
      {/* <img class='cat' src={cat.url[0]} alt="cat picture" /> */}
    </div>
  );
}

export default App;
