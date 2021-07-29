// mehtod -1

// const req = new XMLHttpRequest();
// req.onload = function (){
//     console.log("Sucess");
//     console.log(this);
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function (){
//     console.log("error");
//     console.log(this);
// }

// req.open("GET", "https://api.cryptonator.com/api/full/btc-usd");
// req.send();

// method-2 - simplified than above method

// fetch("https://api.cryptonator.com/api/full/btc-usd")
//     .then(res => {
//         console.log("response. waiting...", res);
//         return res.json();
//     })
//     .then(data =>{
//         console.log("Data parsed...");
//         console.log(data.ticker.price);
//     })
//     .catch((e)=>{
//         console.log("Ohh Error Got", e);
//     })


// method-3 simplified than above method

const fetchBitCoinPrice1 = async()=>{
    try {
        const res = await fetch("https://api.cryptonator.com/api/full/btc-usd");
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (error) {
        console.log("something went wrong",  error);
    }
}

// method-4 simplified than above method

// axios.get("https://api.cryptonator.com/api/full/btc-usd")
//     .then(res =>{
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log("ohhh no error",  err);
//     })
 
// method-5 simplified than above method

const fetchBitCoinPrice2 = async ()=>{
    try {
        const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd");
        console.log(res.data.ticker.price);
    } catch (error) {
        console.log("Ohh No...error " , error)
    }
}  


const onClickButton = document.querySelector("button");
const jokes = document.querySelector('#jokes');

const addNewJokes = async ()=>{
    const jokeText = await getDadJoke();
    // console.log(jokeText);
    const newLI =  document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

// method 5 - How to add header with Axios.
const getDadJoke = async () =>{
    try {
        const config = { headers : { Accept : 'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        // console.log(res.data.joke);
        return res.data.joke;
    } catch (error) {
        console.log("No Jokes. Come Back Later Plz " , error);
    }
}

onClickButton.addEventListener('click', addNewJokes);