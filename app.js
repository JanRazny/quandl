const API_KEY = 'Yow5_-xD1PUpJYrDYjVu';
let startDate = '';
let endDate = '';

let blockChain = [];

function toDay() {
    let today = new Date();
    today.setDate(new Date().getDate() - 1);
    // let startDate = today.toISOString().split('T')[0];
    // let endDate = today.toISOString().split('T')[0];
}


function showblockChain() {
    let mainArea = document.getElementById('main');
    mainArea.innerHTML = "";
    mainArea.innerHTML = /*html */ `
        <div id="datePicker"></div>
            <input type="date" id="startDate" value="2022-06-19" onclick="datePickerStart()">
            <input type="date" id="endDate" value="2022-06-19" onclick="datePickerEnd()">
        </div>
        <div id="course"></div>
            <div>Aktuell kostet ein Blockchain <b id="blockchainInUSDToday">60.000</b> USD</div>
        </div>
    `;

    loadBlockChain();

    //datePicker(startDate, endDate);
    // loadCourse();    
}

async function loadBlockChain() {
    toDay();
    let url = `https://data.nasdaq.com/api/v3/datasets/BCHAIN/MKPRU?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    blockChain.push(responseAsJson);
    blockChainToday(responseAsJson);
    //setPlaceholder();
    console.log(responseAsJson);  
}

function blockChainToday(responseAsJson) {
    let bitcoinToDay =  responseAsJson['dataset']['data'][0][1];
    document.getElementById('blockchainInUSDToday').innerHTML = bitcoinToDay;
}

async function updateDate() {
    //loading();
    hideDate();
    startDate = document.getElementById('startData').value;
    endDate = document.getElementById('endData').value;
    await loadBlockChain();
    // chart();
    // chartBar();
    // bitTable();
    // loadingComplete();
    // document.getElementById('canvas').classList.remove('d-none');
    //   document.getElementById('exchange').classList.remove('d-none');
    // document.getElementById('canvas').scrollIntoView({
    //     behavior: 'smooth'
    // });
}

function hideDate() {
    let dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate() - 1;
    let year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    let minDate = year + '-' + month + '-' + day;

    document.getElementById('endDate').setAttribute('max', minDate);
    document.getElementById('startDate').setAttribute('max', minDate);

}

function datePickerStart() {
    startDate = document.getElementById('startDate').value;
    console.log('startDate');
}

function datePickerEnd() {
    endDate = document.getElementById('endDate').value;
    console.log('endDate');
}

// function datePicker(startDate, endDate) {
//     let dateControlStart = document.getElementById('startDate');
//     let dateControlEnd =  document.getElementById('endDate');
//     startDate = dateControlStart.value;
//     endDate = dateControlEnd.value;

//     console.log('Startdatum ist', startDate);
//     console.log('Enddatum ist', endDate);
// }