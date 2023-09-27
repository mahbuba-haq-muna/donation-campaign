import { Link } from "react-router-dom";


const Card = ({card}) => {
    const{id, image_url, category, category_bg_color, card_bg_color, text_color, title} = card || {}
    return (
        <div>
            <Link to={`/cards/${id}`}>
            <div className="card  w-72 shadow-xl " style={{
                backgroundColor: card_bg_color
            }}>
            <figure><img src={image_url} alt="" /></figure>
            <div className="card-body">
            
            <p className="px-2 py-1 w-fit rounded-md" style={{
                color:text_color,
                backgroundColor: category_bg_color
            }}>
                {category}</p>
           
                <h2 className="card-title" style={{
                    color:text_color
                }}>{title}</h2>
                
                
            </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;