

let transactions = async () => {
    let response = await fetch("http://localhost:3000/transactions");
    return await response.json();
}

transactions().then((data) => {
    console.log(data)
});