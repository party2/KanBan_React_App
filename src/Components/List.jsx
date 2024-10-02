import React from 'react'

import './styles/List.css'
import Card from './Card'

let cardCount = 0;

export default function List(props) {
  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                        <img src="icons/Backlog.svg" alt="" />
                                    
                                    </div>,
                                    'Todo': <div className="list-icon">
                                        <img src="icons/To-do.svg" alt="" />
                                    </div>,
                                    'In progress': <div className="list-icon">
                                        <img src="icons/in-progress.svg" alt="" />
                                    </div>,
                                    'Done': <div className="list-icon">
                                        <img src="icons/Done.svg" alt="" />
                                    </div>,
                                    'Cancelled': <div className="list-icon">
                                        <img src="icons/Cancelled.svg" alt="" />
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
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
                                    <img src="./icons/SVG - Urgent Priority colour.svg" alt="" />
                                    </div>
                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    
                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                    <img src="./icons/add.svg" alt="" />
                    </div>
                    <div className="list-option-item">
                    <img src="./icons/3 dot menu.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, cardCount = 0)
                    
                }
            </div>
        </div>
    </>
  )
}
