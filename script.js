document.getElementById("checkBtn").addEventListener("click", () => {
  const input = document.getElementById("arrayInput").value;
  const resultDiv = document.getElementById("result");

  let arr = input
    .split(',')
    .map(item => item.trim())
    .filter(item => item !== "");

  let n = arr.length;

  if (n === 0) {
    resultDiv.innerHTML = `<div class="text-red-500">Please enter a valid array.</div>`;
    return;
  }

  // Creating a Hashmap to store the frequency of each element
  let freq = {};
  arr.forEach(num => {
    freq[num] = (freq[num] || 0) + 1;
  });

  // if element has frequency greater than n/3 times than it is a candidate for majority element
  let specialElements = [];
  for (let key in freq) {
    if (freq[key] > Math.floor(n / 3)) {
      specialElements.push(key);
    }
  }

  // Display results
  resultDiv.innerHTML = "";

  if (specialElements.length > 0) {
    resultDiv.innerHTML += `
      <div class="bg-red-100 text-red-700 p-3 rounded">
        <strong>Elements appearing more than ⌊n/3⌋ times:</strong> ${specialElements.join(", ")}
      </div>
    `;
  } else {
    resultDiv.innerHTML += `
      <div class="bg-green-100 text-green-700 p-3 rounded">
        <strong>There is no element found appearing more than ⌊n/3⌋ times.</strong>
      </div>
    `;
  }
});
