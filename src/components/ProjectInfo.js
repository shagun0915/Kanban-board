import React from 'react'
import '../css/ProjectInfo.css'
import { Avatar, IconButton } from '@material-ui/core';
import tasks from '../resources/projectTasks.PNG';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import avatar from '../resources/avatar.jpg'
import avatar2 from '../resources/avatar2.jpg'
import avatar3 from '../resources/avatar3.jpg'

function ProjectInfo() {
    return (
        <div className='projectInfo'>
            <div className="projectInfo__project">
                <IconButton>
                    <img src={tasks} style={{height: 50}} alt="projects" />
                </IconButton>
                <h4 style={{margin: 0}}>Building a new app</h4>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            <div className="projectInfo__users">
                <IconButton>
                    <InfoOutlinedIcon />
                </IconButton>
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <Avatar src={avatar} />
                <Avatar src={avatar2} />
                <Avatar src={avatar3} />
                <AddCircleOutlineSharpIcon className="projectInfo__addUser" style={{fontSize: 45, color: "#2F80ED"}} />
            </div>
        </div>
    )
}

export default ProjectInfo
