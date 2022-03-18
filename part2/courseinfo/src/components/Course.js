import Header from "./Header"
import Content from './Content'

const Course = ({courses}) => 
<div>
  <div key={courses.id}>
    <Header name={courses.name}/>
    <Content parts={courses.parts}/>
  </div>
)

</div>

export default Course