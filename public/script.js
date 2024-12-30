function calculateTips() {
    // Input values
    const totalTips = parseFloat(document.getElementById('totalTips').value) || 0; // Default to 0 if not provided
  
    // Hardcoded tip percentages
    const tipPercentage1 = 50;
    const tipPercentage2 = 30;
    const tipPercentage3 = 20;
    const tipPercentage4 = 25;
    const tipPercentage5 = 15;
    const tipPercentage6 = 10;
    const tipPercentage7 = 40;
    const tipPercentage8 = 35;
    const tipPercentage9 = 25;
    const tipPercentage10 = 20;
    const tipPercentage11 = 15;
    const tipPercentage12 = 10;
  
    // Employee hours
    const hours1 = parseFloat(document.getElementById('hours1').value) || 0;
    const hours2 = parseFloat(document.getElementById('hours2').value) || 0;
    const hours3 = parseFloat(document.getElementById('hours3').value) || 0;
    const hours4 = parseFloat(document.getElementById('hours4').value) || 0;
    const hours5 = parseFloat(document.getElementById('hours5').value) || 0;
    const hours6 = parseFloat(document.getElementById('hours6').value) || 0;
    const hours7 = parseFloat(document.getElementById('hours7').value) || 0;
    const hours8 = parseFloat(document.getElementById('hours8').value) || 0;
    const hours9 = parseFloat(document.getElementById('hours9').value) || 0;
    const hours10 = parseFloat(document.getElementById('hours10').value) || 0;
    const hours11 = parseFloat(document.getElementById('hours11').value) || 0;
    const hours12 = parseFloat(document.getElementById('hours12').value) || 0;
  
    // Calculate weighted hours
    const weightedHours1 = hours1 * tipPercentage1;
    const weightedHours2 = hours2 * tipPercentage2;
    const weightedHours3 = hours3 * tipPercentage3;
    const weightedHours4 = hours4 * tipPercentage4;
    const weightedHours5 = hours5 * tipPercentage5;
    const weightedHours6 = hours6 * tipPercentage6;
    const weightedHours7 = hours7 * tipPercentage7;
    const weightedHours8 = hours8 * tipPercentage8;
    const weightedHours9 = hours9 * tipPercentage9;
    const weightedHours10 = hours10 * tipPercentage10;
    const weightedHours11 = hours11 * tipPercentage11;
    const weightedHours12 = hours12 * tipPercentage12;
  
    const totalWeightedHours =
      weightedHours1 +
      weightedHours2 +
      weightedHours3 +
      weightedHours4 +
      weightedHours5 +
      weightedHours6 +
      weightedHours7 +
      weightedHours8 +
      weightedHours9 +
      weightedHours10 +
      weightedHours11 +
      weightedHours12;
  
    // Calculate individual tips
    const ratePerWeightedHour = totalWeightedHours > 0 ? totalTips / totalWeightedHours : 0;
    const tips1 = ratePerWeightedHour * weightedHours1;
    const tips2 = ratePerWeightedHour * weightedHours2;
    const tips3 = ratePerWeightedHour * weightedHours3;
    const tips4 = ratePerWeightedHour * weightedHours4;
    const tips5 = ratePerWeightedHour * weightedHours5;
    const tips6 = ratePerWeightedHour * weightedHours6;
    const tips7 = ratePerWeightedHour * weightedHours7;
    const tips8 = ratePerWeightedHour * weightedHours8;
    const tips9 = ratePerWeightedHour * weightedHours9;
    const tips10 = ratePerWeightedHour * weightedHours10;
    const tips11 = ratePerWeightedHour * weightedHours11;
    const tips12 = ratePerWeightedHour * weightedHours12;
  
    // Render results in the table
    const resultTable = document.getElementById('result');
    resultTable.innerHTML = `
      <tr><td>Employee 1</td><td>${hours1.toFixed(2)}</td><td>${tips1.toFixed(2)}</td></tr>
      <tr><td>Employee 2</td><td>${hours2.toFixed(2)}</td><td>${tips2.toFixed(2)}</td></tr>
      <tr><td>Employee 3</td><td>${hours3.toFixed(2)}</td><td>${tips3.toFixed(2)}</td></tr>
      <tr><td>Employee 4</td><td>${hours4.toFixed(2)}</td><td>${tips4.toFixed(2)}</td></tr>
      <tr><td>Employee 5</td><td>${hours5.toFixed(2)}</td><td>${tips5.toFixed(2)}</td></tr>
      <tr><td>Employee 6</td><td>${hours6.toFixed(2)}</td><td>${tips6.toFixed(2)}</td></tr>
      <tr><td>Employee 7</td><td>${hours7.toFixed(2)}</td><td>${tips7.toFixed(2)}</td></tr>
      <tr><td>Employee 8</td><td>${hours8.toFixed(2)}</td><td>${tips8.toFixed(2)}</td></tr>
      <tr><td>Employee 9</td><td>${hours9.toFixed(2)}</td><td>${tips9.toFixed(2)}</td></tr>
      <tr><td>Employee 10</td><td>${hours10.toFixed(2)}</td><td>${tips10.toFixed(2)}</td></tr>
      <tr><td>Employee 11</td><td>${hours11.toFixed(2)}</td><td>${tips11.toFixed(2)}</td></tr>
      <tr><td>Employee 12</td><td>${hours12.toFixed(2)}</td><td>${tips12.toFixed(2)}</td></tr>
      <tr><th>Total</th><th>${(hours1 + hours2 + hours3 + hours4 + hours5 + hours6 + hours7 + hours8 + hours9 + hours10 + hours11 + hours12).toFixed(2)}</th><th>${totalTips.toFixed(2)}</th></tr>
    `;
  }
  