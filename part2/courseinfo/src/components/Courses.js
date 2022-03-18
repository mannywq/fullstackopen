import Header from "./Header"
import Content from './Content'

const Courses = ({courses}) => {

  return(
  courses.map(course => (
<div>
  <div key={course.id}>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
  </div>

</div>)))
}

export default Courses