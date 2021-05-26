import React from 'react'
import '../css/ProjectCards.css'
import assigned from '../resources/avatar.jpg'
import assigned1 from '../resources/avatar2.jpg'
import design from '../resources/designsystem.PNG'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Task from './Task'

function Review() {
    return (
        <div className="todo col-md-3 col-xs-12" style={{borderTop: "#FDBC1F 3px solid"}}>
            <div className="projectCard__header">
                <div style={{display: "flex"}}>
                    <h5>REVIEW</h5>
                    <h5 style={{marginLeft: "15px"}}>2</h5>
                </div>
                <MoreHorizIcon />
            </div>
            <Task heading="Components" assigned={assigned} date="10 - 23 December" difficulty="High" comments="2" />
            <Task heading="Design system" image={design} assigned={assigned1} date="19 - 23 December" difficulty="Medium" comments="3" />
            <div className="projectCard__footer">
                <AddOutlinedIcon />
                <h5>Add Task</h5>
            </div>
        </div>
    )
}

export default Review
