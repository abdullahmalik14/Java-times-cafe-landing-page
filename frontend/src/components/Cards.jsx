import React, { useState } from 'react'
import cardImg from "../assets/images/card-img.png"
import profileImg from "../assets/images/profile-img.png"
import locationIcon from "../assets/images/Location.png"
import checkMark from "../assets/images/Check Mark.png"
import { useNavigate } from 'react-router-dom'
const Cards = () => {
    const navigate = useNavigate()
    const [showAll,setShowAll] = useState(false)
    const arr = [
        {
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Funding Completed!",
            check_mark:checkMark
        },
        {
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },
        {
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        }
        ,{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        },{
            card_img:cardImg,
            profile_img:profileImg,
            title:"Java Times Caffe #1 Saltillo 400",
            description:"Java Times Caffe #1 the best cafe to invest in located on a busy road",
            location_icon:locationIcon,
            location:"Calz Saltillo 400 685, Exhacienda Los Angeles, 27260 Torreon, Coah.",
            btn_text:"Invest Now",
        }
    ]
    const detailSection =()=>{
        navigate("/card_details")
    }

    const toggleShowAll =()=>{
        setShowAll(!showAll)
    }
    const visibleCards = arr.slice(0, showAll ? arr.length : 6);

    // Calculate the number of placeholders needed to fill the row
    const placeholdersNeeded = visibleCards.length % 3 === 0 ? 0 : 3 - (visibleCards.length % 3);

    return (
        <div className='card-sec'>
            {visibleCards.map((item, index) => (
                <div className='card-container' key={index}>
                    <img src={item.card_img} alt="" />
                    <div className='card-details'>
                        <div className='profile'>
                            <img src={item.profile_img} alt="" />
                            <h5>{item.title}</h5>
                        </div>
                        <div className='description'>
                            <p>{item.description}</p>
                        </div>
                        <div className='location'>
                            <img src={item.location_icon} alt="" />
                            <p>{item.location}</p>
                        </div>
                        <div className={index === 0 ? "green-button" : "btn"}>
                            <button onClick={detailSection}>{item.btn_text}</button>
                            {index === 0 && <img src={checkMark} alt="Check Mark" className="check-mark" />}
                        </div>
                    </div>
                </div>
            ))}
            {Array.from({ length: placeholdersNeeded }).map((_, index) => (
                <div key={index} className='card-container placeholder'></div>
            ))}
            <div className='btn-show-more'>
                <button onClick={toggleShowAll}>
                    {showAll ? "View Less" : "View More"}
                </button>
            </div>
            
        </div>
    );
};

export default Cards;