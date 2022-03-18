import Part from './Part'

const Content = ({parts}) => {

const total = parts.reduce((sum,part) => sum + part.exercises, 0)

return (
<>
<ul>
  
  {parts.map(part => <Part id={part.id} part={part.name} numex={part.exercises}/>)}
</ul>

<p>There are {total} exercises in total.</p>
</>

)
}

export default Content
