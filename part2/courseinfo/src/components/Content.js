import Part from './Part'

const Content = ({parts}) => (
<ul>
  
  {parts.map(part => <Part id={part.id} part={part.name} numex={part.exercises}/>)}
</ul>
)

export default Content
