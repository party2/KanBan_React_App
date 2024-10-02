import React from 'react'

import './styles/Card.css'


export default function Card(props) {
    function generateColorFromName(name) {

        const charCode1 = name.charCodeAt(0);
        const charCode2 = name.charCodeAt(1);

        const red = (charCode1 * 10) % 256;
        const green = (charCode2 * 20) % 256;
        const blue = ((charCode1 + charCode2) * 15) % 256;
    
        return `rgb(${red}, ${green}, ${blue})`;
    }
    
    const backgroundColor = generateColorFromName(props.cardDetails.userObj.name);
    
    return (
    <>
        {/* {console.log(props)} */}
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{props.cardDetails.id}</div>
                
                <div className="card-profile" style={{backgroundColor}} >
                    <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                    <div className={props.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
            <span id="card-status-svg">
                <img 
                    src={`./icons/${props.cardDetails.status === "Done" ? "Done.svg" 
                    : props.cardDetails.status === "Todo" ? "To-do.svg"
                    : props.cardDetails.status === "In Progress" ? "in-progress.svg"
                    : "Backlog.svg"}`} 
                    alt={props.cardDetails.status} 
                />
            </span>
            {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon">
                            <img src="./icons/No-priority.svg" alt="" />
                        </div>,
                        1: <div className="card-tag-icon">
                            <img src="./icons/Img - Low Priority.svg" alt="" />
                        </div>,
                        2: <div className="card-tag-icon">
                            <img src="./icons/Img - Medium Priority.svg" alt="" />
                        </div>,
                        3: <div className="card-tag-icon">
                            <img src="./icons/Img - High Priority.svg" alt="" />
                        </div>,
                        4: <div className="card-tag-icon">
                            <img src="./icons/SVG - Urgent priority colour.svg" alt="" />
                        </div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
