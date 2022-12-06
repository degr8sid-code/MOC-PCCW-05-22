const numbers = [1, 2, 3, 4, 5];
//mapping the array and embedding it in the li tags
const updatedNums = numbers.map((number, index) => {
  // essential to add the key to uniquely identify the elements
  return <li key={index.toString()}>{number}</li>;
});

// rendering as an unordered list
ReactDOM.render(<ul>{updatedNums}</ul>, document.getElementById("root"));
