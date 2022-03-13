const Hello = (props) => (
  <div>
    <p>Hello {props.name}</p>
  </div>
)

const App = () => (
  <div>
    <h1>Greetings</h1>
    <Hello name="Minami"/>
    <Hello name="George"/>
  </div>
)

export default App;
