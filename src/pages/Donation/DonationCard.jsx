

const DonationCard = ({ card }) => {

    const { id, image, card_bg_color, price, description, text_color, title, category_bg_color, category } = card || {}
    return (
        <div>
            <div style={{
                backgroundColor: card_bg_color,
            }} className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                <p className="px-2 py-1 w-fit rounded-md" style={{
                color:text_color,
                backgroundColor: category_bg_color
            }}>
                {category}</p>
                    <h2 className="card-title">{title}</h2>
                    <p style={{
                        color: text_color,
                        fontWeight: "bold",
                    }
                    }>${price}</p>
                    <div className="card-actions">
                        <button style={{
                            backgroundColor: text_color,
                        }} className="btn text-white">View Details</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default DonationCard;