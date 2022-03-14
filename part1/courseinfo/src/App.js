


const Header = (props) => {

  return (
    <h1>{props.course}</h1>
)

}
const Content = (props) => {


  return (
    <div>

    <Parts parts={props.parts[0].name} num={props.parts[0].exercises} />
    <Parts parts={props.parts[1].name} num={props.parts[1].exercises}/>
    <Parts parts={props.parts[2].name} num={props.parts[2].exercises}/>

    </div>
  )
}

const Parts = (props) => {

  return (

      <p>{props.parts} {props.num}</p>
  )
}

const Total = (props) => {

 let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return (

    <p>Number of exercises: {total}</p>
  )
}

const App = () => {

  const course = {
    
  name: 'Half stack application development',
  parts:  [
    { 
    name: 'Fundamentals of React:',
    exercises: 10
    },

    {
    name: 'Using props to pass data:', 
    exercises: 7
    },
    {
    name: 'State of a component:',
    exercises: 14
    }
  ]
}


  return (
    
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />

    </div>
)
}

export default App;
