import Courses from './components/Courses'
//const Header = ({name}) => <h1>{name}</h1>

//const Total = ({ sum }) => <p>Number of exercises {sum}</p>



const App = ({courses}) => (

      <div>
        <h1>Web dev courses</h1>
        <Courses courses={courses} />
      </div>
)

export default App
