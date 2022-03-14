
const course = 'Half stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (props) => {

  return (
    <h1>{props.course}</h1>
)

}
const Content = () => {


  return (
    <div>

    <Parts name={part1} num={exercises1} />
    <Parts name={part2} num={exercises2} />
    <Parts name={part3} num={exercises3} />

    </div>
  )
}

const Parts = (props) => {

  return (

      <p>{props.name} {props.num}</p>
  )
}

const Total = (props) => {

  return (

    <p>Number of exercises {props.sum}</p>
  )
}

const App = () => {





  return (
    
    <div>
      <Header course={course}/>
      <Content/>
      <Total sum ={exercises1 + exercises2 + exercises3} />


    </div>
)
}

export default App;
