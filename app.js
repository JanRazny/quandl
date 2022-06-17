const API_KEY = 'Yow5_-xD1PUpJYrDYjVu';


async function loadCourse() {
    let today = new Date();
    //today.setDate(new Date().getDate() - 1);
    //let startDate = today.toISOString().split('T')[0];
    //let endDate = today.toISOString().split('T')[0];
    let url = `https://data.nasdaq.com/api/v3/datasets/BCHAIN/MKPRU?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    console.log(responseAsJson);

    showBlockChainToDay(responseAsJson);
}


function showBlockChainToDay(responseAsJson) {
    let bitcoinToDay =  responseAsJson['dataset']['data'][0][1];
    document.getElementById('blockchainInUSDToday').innerHTML = bitcoinToDay;
}


function datePicker() {
    let startDate = document.getElementById('startDate').value;
    startDate.setDate(new Date().getDate() - 1);
}