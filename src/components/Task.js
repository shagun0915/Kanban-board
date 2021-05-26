import { Avatar } from '@material-ui/core'
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import React from 'react'
import '../css/Task.css'

function Task({heading, image, assigned, date, difficulty, comments}) {
    return (
        <div className='task'>
            <div className="task__header">
                <h5>{heading}</h5>
                {image? 
                    <img src={image} alt="" />
                    :<p></p>
                }
                <hr />
            </div>
            <div className="task__assigned">
                <h5>Assigned: </h5>
                <Avatar src={assigned} />
                <AddCircleOutlineSharpIcon style={{fontSize: "29px", color: "#838383"}} />
            </div>
            <div className="task__date">
                <DateRangeIcon style={{color: "#838383"}} />
                <h5>{date}</h5>
            </div>
            <div className="task__stats">
                <h6 className={`task__difficulty ${difficulty}`}>{difficulty}</h6>
                <div className="task__comments">
                    <TextsmsOutlinedIcon style={{color: "#838383", fontSize: "20px"}} />
                    <h6>{comments}</h6>
                </div>
            </div>
        </div>
    )
}

export default Task
