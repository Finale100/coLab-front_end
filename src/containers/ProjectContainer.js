import React from 'react'
import { Card } from 'semantic-ui-react'
import ProjectCard from '../components/ProjectCard.js'
import NewProject from '../components/NewProject.js'

class ProjectContainer extends React.Component {


  postProject = (e) => {
    fetch('http://localhost:3000/api/v1/projects', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: e.currentTarget.form[0].value,
        img_url: e.currentTarget.form[1].value,
        description: e.currentTarget.form[5].value,
        start_date: e.currentTarget.form[2].value,
        end_date: e.currentTarget.form[3].value,
        max_member: e.currentTarget.form[4].value
      })
  }).then (r => r.json())
    .then(project => console.log(project))
}

  render() {
    return (
        <div>
          <h2>Projects:</h2>
          <Card.Group>
            {this.props.allProjects.map(project => <ProjectCard project={project} key={project.id} onClick={this.props.projectHandleClick}/>)}
          </Card.Group>
          <div>
          <NewProject postProject={this.postProject}/>
          </div>
        </div>
    )
  }
}

export default ProjectContainer
