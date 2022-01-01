import './Card.css'

function Card(props){
    let className = `card ${props.className}`
    return (
        <div className={className}>{props.children}</div>
    )
}

export default Card