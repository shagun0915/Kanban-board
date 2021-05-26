import React from 'react'
import '../css/ProjectCards.css'
import assigned from '../resources/avatar.jpg'
import assigned1 from '../resources/avatar2.jpg'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Task from './Task'

function ToDo() {
    return (
        <div className="todo col-md-3 col-xs-12" style={{borderTop: "#8E8B8B 3px solid"}}>
            <div className="projectCard__header">
                <div style={{display: "flex"}}>
                    <h5>TO DO</h5>
                    <h5 style={{marginLeft: "15px"}}>2</h5>
                </div>
                <MoreHorizIcon />
            </div>
            <Task heading="User testing" assigned={assigned} date="19 - 23 December" difficulty="Medium" comments="1" />
            <Task heading="Developing" assigned={assigned1} date="19 - 23 December" difficulty="High" comments="0" />
            <div className="projectCard__footer">
                <AddOutlinedIcon />
                <h5>Add Task</h5>
            </div>
        </div>
    )
}

export default ToDo
