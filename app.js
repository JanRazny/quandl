const API_KEY = 'Yow5_-xD1PUpJYrDYjVu';

async function loadCourse() {
    let url = 'https://data.nasdaq.com/api/v3/datasets/BITFINEX/LUNAF0USTF0?start_date=2022-05-22&end_date=2022-05-22&api_key=Yow5_-xD1PUpJYrDYjVu';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log('API answer: ', responseAsJson['dataset']['data'][0][4]);
}