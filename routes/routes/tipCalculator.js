const totalTipsInput = document.getElementById('totalTips').value;

const workerNameInputs = document.querySelectorAll('.workerName');
const workerHoursInputs = document.querySelectorAll('.workerHours');
const workerTipPercentageInputs = document.querySelectorAll('.workerTipPercentage');

document.getElementById('calculateTips').addEventListener('click', () =>{
    
    const totalTips = parseFloat(document.getElementById('totalTips').value);
    const workerName = document.getElementById('wokerName').value;
    const workerHours = parseFloat(document.getElementById('workerHours').value);
    const workerTipPercentage = parseFloat(document.getElementById('workerTipPercentage').value);

    const totalWorkersFullPercentTip = workerHours;

    const workerTip = (workerTipPercentage/100) * totalTips;

    console.log(`${workerName} worked ${workerHours} hours and earned $${workerTip.toFixed(2)}`);
})