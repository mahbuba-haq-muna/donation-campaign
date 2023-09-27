import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Campaign = () => {
    const [card, setCard] = useState()

    const cards = useLoaderData();
    console.log(cards)
    return (
        <div>
            
        </div>
    );
};

export default Campaign;