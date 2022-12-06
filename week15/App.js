// use other features of React using the hook feature
// why do we need the hooks?
// Because in JS, "this" keyword keyword refers to different objects depending on how it is used: In an object method, this refers to the object. 
// hot reloading "keep the app running and to inject new versions of the files that you edited at runtime."
// in react, there is no particular way to reuse the components
// there is a need to resuse stateful logic in a better way
// class components use constructors. this keyword to manage the state and a setter function to manage that.

// the first hook - State Hook
// for instance, you wrote a component and now you want to maintain the state
// we use state hook to maintain the life cycle of the components
// hooks are functions to manage functional components


// The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.
// State Hooks let you do this without using React State object
//lets create a counter application


// function App() {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <button onClick={
//                 () => setCount(count+1)}>count {count}
//             </button>
//         </div>
//     );
// }

const App = () => {
    const handler = () => alert('hello');
    return <button onClick={handler}>Click Me</button>;
  };
ReactDOM.render(<App />, document.getElementById("root"));