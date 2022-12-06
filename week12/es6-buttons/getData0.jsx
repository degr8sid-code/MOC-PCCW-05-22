const App = () => {
    // const handler = () => alert (`Hello World`);
    let a =[1,2,3,4];
    let list = a.map((item, index) => {
    return <MyButton key={index} onClick={handler}></MyButton>
});
    return <div>{list}</div>;
};

const MyButton  = ({ onClick }) => {
    let { Button } = ReactBootStrap;
    return <Button onClick={onClick}>Click Me!</Button>;
};

ReactDOM.render(<App />, document.getElementById('root'));