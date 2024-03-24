import './Styles/Card.css'
const Card = (props)=>{
    return (
        <div className="Card">
           
            <img className='imgCard'src={props.imagen} alt="" />
            
            <h3>{props.titulo}</h3>
    
            
        </div>
    )
}

export default Card;