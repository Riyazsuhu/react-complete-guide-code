import './ExpenseDate.css'

function ExpenseDate(props) {
    let date = {
        month: props.date.toLocaleString('en-US', { month: 'long' }),
        day: props.date.toLocaleString('en-US', { day: '2-digit' }),
        year: props.date.getFullYear()
    }
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{date.month}</div>
            <div className='expense-date__day'>{date.day}</div>
            <div className='expense-date__year'>{date.year}</div>
        </div>
    )
}

export default ExpenseDate
