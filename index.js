function display(event) {
    event.preventDefault();
    let country = document.getElementById('country').value;
    let dateFrom = document.getElementById('date-from').value;
    let dateTo = document.getElementById('date-to').value;
    if (country === "" || dateFrom === "" || dateTo === "") {
        alert("Field Should not be Empty");
    } else {
        covidInfo(country, dateFrom, dateTo);
    }
}
function covidInfo(country, dateFrom, dateTo) {
    axios.get(`https://api.covid19api.com/country/${country}?from=${dateFrom}T00:00:00Z&to=${dateTo}T00:00:00Z`)
        .then((response) => {
            let data = response.data[0];
            const div = document.createElement('div');
            div.setAttribute('class', 'jumbotron');
            let output = `
                <h4>Confirmed Cases : ${data.Confirmed}</h4> 
                <br>
                <h4>Active Cases : ${data.Active}</h4> 
                <br>
                <h4>Death Cases : ${data.Deaths}</h4> 
                <br>       
          `;
            div.innerHTML = output;
            document.getElementById('result-container').appendChild(div);
        })
}