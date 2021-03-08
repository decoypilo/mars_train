/*
Traying to hack train schedule in Mars - Bombay Beach
*/

const btnTrainWest = document.getElementById('trainToWest');
const btnTrainEast = document.getElementById('trainToEast');
const btnShow = document.getElementById('show');

let timeStmp = new Date();
let trainsToWest = [];
let trainsToEast = [];
let i = 0;
let j = 0;

let trains = {};

btnTrainWest.onmousedown = () => {
  timeStmp = new Date();
  num = 'w_' + i.toString();
  trains[num] = timeStmp;
  i++;

  console.log(trains);
};

btnTrainEast.onmousedown = () => {
  timeStmp = new Date();
  num = 'e_' + j.toString();
  trains[num] = timeStmp;
  j++;
  console.log(trains);
};

function printTrains(list) {
  console.log(list);
}

btnShow.onmousedown = () => {
  const blob = new Blob([JSON.stringify(trains, null, 4)], {
    type: 'application/json',
  });

  const sFileName = 'trains.json';
  let newLink = document.createElement('a');
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(blob);
  } else {
    newLink.href = window.URL.createObjectURL(blob);
    newLink.style.display = 'none';
    document.body.appendChild(newLink);
  }
  newLink.click();
};