const element = <h1>Hello, world!</h1>;

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting name="Alice" />);
