import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CampaignCard from "./CampaignCard";


const Campaign = () => {
    // const{image_url,text_color, title} = card || {}
    const [card, setCard] = useState();
    const { id } = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        const findCard = cards?.find(card => card.id == id)
        setCard(findCard)
    }, [id, cards]);

    
    return (
        <div>
            <CampaignCard card={card}></CampaignCard>
        </div>
    );
};

export default Campaign;