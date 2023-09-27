import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false)

    useEffect(()=>{
        const donationItems= JSON.parse(localStorage.getItem('donation'));

        if(donationItems){
            setDonation(donationItems)
        }
        else{
            setNoFound('You had not donate for the campaign yet')
        }
    },[])
    // console.log(donation);
    return (
        <div>
            {
                noFound? <p className="h-[80vh] text-4xl text-rose-700 font-semibold flex justify-center items-center">{noFound}</p> : <div>
                    <div className="grid lg:grid-cols-2 gap-5">
                        {
                        donation?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;