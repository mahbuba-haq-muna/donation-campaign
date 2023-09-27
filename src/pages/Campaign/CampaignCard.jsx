

const CampaignCard = ({ card }) => {
    const { id, image_url, price, description, text_color, title } = card || {}
    return (
        <div>
            <div className="card w-full h-screen bg-base-100 shadow-xl px-5">
                <figure className="px-10 pt-5">
                    <img src={image_url} alt="Shoes" className="rounded-xl w-full  relative" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="ml-2 card-actions bg-[rgba(0,0,0,0.50)] p-4 absolute bottom-1/4 left-19  w-[91%] ">
                        <button style={{
                            backgroundColor: text_color
                        }} className="btn ml-4 text-white border-0">Donate ${price}</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CampaignCard;