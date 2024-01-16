export  const Feedback=({values, totalFeedback})=>{
    const {good, neutral, bad} = values
    return (
        <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%</p> 
        </div>
    )
}