

let customers = async () => {
    let response = await fetch("http://localhost:3000/customers");
    return await response.json();
}

customers().then((data) => {

    const container = document.createElement("div");

    data.forEach((customer) => {
        const row = document.createElement("div");
        row.innerHTML = customer.name;
        container.appendChild(row)
    });

    document.body.appendChild(container);
    


});