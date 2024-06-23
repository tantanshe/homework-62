import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="main-title">About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin, ipsum at mollis tincidunt, leo
        massa blandit augue, blandit rutrum urna erat eget lorem. Vestibulum ullamcorper hendrerit facilisis. Praesent
        dignissim justo venenatis lorem lacinia, sed dignissim elit tempor. Donec facilisis ultrices libero, sit amet
        aliquam enim posuere a. Maecenas vitae purus tempus, tempor magna sed, rhoncus leo. Suspendisse at sapien
        sagittis elit pharetra dictum. Vivamus pulvinar sem id nunc consectetur, quis rutrum urna tincidunt. Quisque
        lacinia risus eu ex euismod, semper commodo enim fermentum. Quisque quam enim, bibendum vel congue et,
        scelerisque non mauris. Aenean vel est ac mauris posuere consequat tempus non lectus.
      </p>

      <CardGroup>
        <Card className="card">
          <Card.Img variant="top" src="https://kpopping.com/documents/1d/0/800/9(85).jpeg?v=c79a0"/>
          <Card.Body>
            <Card.Title>First</Card.Title>
            <Card.Text>
              Etiam efficitur volutpat erat, ut suscipit sem tempor a. Proin ligula mauris, commodo ut sollicitudin
              molestie, posuere quis orci. Integer imperdiet ac mauris ut feugiat. Ut sed fermentum enim. Suspendisse
              dignissim commodo tellus vitae semper. Praesent venenatis placerat lacus in accumsan. Mauris quis tempus
              lacus. Praesent non lobortis mi, non ultricies magna.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="https://kpopping.com/documents/ac/1/800/31(27).jpeg?v=c79a0"/>
          <Card.Body>
            <Card.Title>Second</Card.Title>
            <Card.Text>
              Nullam porttitor felis at nisi feugiat, at varius nunc vehicula. Nunc id egestas lacus. Nam a augue
              mauris. Nam viverra egestas nisi. Praesent vehicula, dui aliquet laoreet volutpat, quam lacus mollis ante,
              id tempor quam libero in velit. Suspendisse eu dolor a lorem tempor sodales ut sed neque. Nunc vel
              tincidunt lectus, sed sagittis dui.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="https://kpopping.com/documents/c6/5/800/46(8).jpeg?v=c79a0"/>
          <Card.Body>
            <Card.Title>Third</Card.Title>
            <Card.Text>
              Praesent facilisis metus sit amet quam maximus varius. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Aliquam euismod risus at tortor imperdiet, sit amet
              consectetur turpis imperdiet. Curabitur quis velit neque. Duis aliquam tellus auctor bibendum eleifend.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default About;