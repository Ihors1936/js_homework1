

function checkProbabilityTheory(count) {
  let evenCount = 0; 

  for (let i = 0; i < count; i++) {
    let number;

    
    do {
      number = Math.floor(Math.random() * 1001); //це для того щоб, програма не видавала не цілі числа, у випадку коли в нас буде 0.12, щоб число  через Math.floor не ставало 0 ми розширяемо його діапазон до 1000 
    } while (number < 100);

   
    if (number % 2) continue;

    
    evenCount++;
  }

  
  let oddCount = count - evenCount;

  
  let evenPercent = (evenCount / count * 100).toFixed(2);
  let oddPercent = (oddCount / count * 100).toFixed(2);

  console.log("Кількість згенерованих чисел: " + count);
  console.log("Парних чисел: " + evenCount);
  console.log("Не парних чисел: " + oddCount);
  console.log("Відсоток парних до не парних: " + evenPercent + "% / " + oddPercent + "%");
}

checkProbabilityTheory(1000);
