import { useState} from 'react'

const Button = ({onClick, text}) => {
  
  return (
  <button onClick={onClick}>{text}</button>

  )
}

const StatLine = ({name, value}) => {

  return (
    <tr>
    <td>{name}</td><td>{value}</td>
    </tr>
  )

}

const Stats = (clicks) => {

  const {good, bad, neutral} = clicks.clicks

  const total = good + bad + neutral
  const avg = (good - bad) /total
  const pos = (good - bad) / total *100

  if (total === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <>
    <h1>stats</h1>
    <table>
    <tbody>
    <StatLine name="good" value={good} />
    <StatLine name="bad" value={bad} />
    <StatLine name="neutral" value={neutral} />
    <StatLine name="average" value={avg} />
    <StatLine name="positive" value={pos} />
    </tbody>
    </table>
    </>
  )

}

const App = () => {
  
  const [clicks, setClicks] = useState({good: 0, neutral: 0, bad:0})

  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good +1})

    const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral +1})

    const handleBadClick = () =>
    setClicks({...clicks, bad: clicks.bad +1})


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleBadClick} text="bad"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Stats clicks={clicks} />

    </div>
  );
}

export default App;
