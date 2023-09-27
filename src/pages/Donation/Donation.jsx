import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);

    const[isShow, setIsShow] = useState(false);
    const [totalDonation, setTotalDonation] = useState(0)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));

        if (donationItems) {
            setDonation(donationItems)
            const total = donationItems.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

      console.log(total);
      setTotalDonation(total)
        }
        else {
            setNoFound('You had not donate for the campaign yet')
        }
    }, [])
    // console.log(donation);
    return (
        <div>
            {
                noFound ? <p className="h-[80vh] text-4xl text-rose-700 font-semibold flex justify-center items-center">{noFound}</p> : <div>
                    <div className="grid lg:grid-cols-2 gap-5">
                        {
                            isShow ? donation?.map(card => <DonationCard key={card.id} card={card}></DonationCard>) 
                            :
                            donation?.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                    </div>
                    <div className="my-5 flex justify-center">
                        {
                            donation.length > 4 && <button onClick={()=> setIsShow(!isShow)} className="btn bg-fuchsia-300">{isShow ? "See Less" : "See All"}</button>
                        }
                    </div>
                </div>
            }
            
        </div>
    );
};

export default Donation;