import Course from './components/Course'
import Content from './components/Content'

//const Header = ({name}) => <h1>{name}</h1>

//const Total = ({ sum }) => <p>Number of exercises {sum}</p>



const App = ({course}) =>

      <div>
        <Course courses={course} />
        <Content parts={course.parts} />
      </div>

export default App
