import Card from "./card";


const Cards = ({cards}) => {
    
    return (
        <div className="max-w-[1300px] mx-auto py-16">
            
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    cards?.map (card=> <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;