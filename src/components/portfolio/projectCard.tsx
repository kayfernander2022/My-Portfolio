import React from 'react'
import Card from 'react-bootstrap/Card'
import sampleImage from '../../img/sample.png'
import Project from '../../models/project'

export const ProjectCard: React.FC<Project> = props => {
    const imagePath: string = props.image ? props.image : sampleImage; //props.image ? 'img/' + props.image : sampleImage

    return (
        <Card className="shadow-sm">
            <Card.Img variant="top" src={imagePath} alt={props.title} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text><b>Tech Stack:</b> {props.techStack}</Card.Text>
                <Card.Text>{props.summary}</Card.Text>
                {props.links &&
                    props.links.map((link, i) => (
                        <Card.Link key={i} href={link.url} target="_blank">
                            {link.label}
                        </Card.Link>
                    ))}
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
