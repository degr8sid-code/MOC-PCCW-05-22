//Render a component
// const Hello = () => {
//   const name = Fred;
//   return (<h1>Hello {name} </h1>)
// };

const App = () => {
  const handler = () => alert('hello');
  return <button onClick={handler}>Click Me</button>;
};

//component with props passed from ReactDOM
// const Hello = props => {
//   const name = props.name;
//   return <h1>Hello {name} </h1>>;
// };

//component with other properties
// const Hello = props => {
//   let color = props.action();
//   return <h1 style={{ backgroundColor: color }}> Hello {props.name} </h1>
// };

// const getRandomColor = () => {
//   const palette = ["red", "blue", "green"];
//   let color = palette[Math.floor(Math.Random() * 3)];
//   console.log(color);
//   return color;
// };

//Destructure an object

//---------------
// ReactDOM.render(<Hello />, document.getElementById("root"));
// ReactDOM.render(<Hello name="Francis"/>, document.getElementById("root"));
// ReactDOM.render(
// <Hello action={getRandomColor} name="Lisa"/>, 
// document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
