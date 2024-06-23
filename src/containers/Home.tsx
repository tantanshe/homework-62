import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex">
        <img className="img" src="https://seoulbeats.com/wp-content/uploads/2015/05/20150520_seoulbeats_shinee3.jpg"
             alt="Main pic 1"/>
      </div>
      <div className="d-flex justify-content-end">
        <img className="img" src="https://mylittlediamonds.com.br/wp-content/uploads/2015/11/bg08.jpg"
             alt="Main pic 2"/>
      </div>
      <h1 className="main-title">My website</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin, ipsum at mollis tincidunt, leo
        massa blandit augue, blandit rutrum urna erat eget lorem. Vestibulum ullamcorper hendrerit facilisis. Praesent
        dignissim justo venenatis lorem lacinia, sed dignissim elit tempor. Donec facilisis ultrices libero, sit amet
        aliquam enim posuere a. Maecenas vitae purus tempus, tempor magna sed, rhoncus leo. Suspendisse at sapien
        sagittis elit pharetra dictum. Vivamus pulvinar sem id nunc consectetur, quis rutrum urna tincidunt. Quisque
        lacinia risus eu ex euismod, semper commodo enim fermentum. Quisque quam enim, bibendum vel congue et,
        scelerisque non mauris. Aenean vel est ac mauris posuere consequat tempus non lectus.
        Etiam efficitur volutpat erat, ut suscipit sem tempor a. Proin ligula mauris, commodo ut sollicitudin molestie,
        posuere quis orci. Integer imperdiet ac mauris ut feugiat. Ut sed fermentum enim. Suspendisse dignissim commodo
        tellus vitae semper. Praesent venenatis placerat lacus in accumsan. Mauris quis tempus lacus. Praesent non
        lobortis mi, non ultricies magna.
        Nullam porttitor felis at nisi feugiat, at varius nunc vehicula. Nunc id egestas lacus. Nam a augue mauris. Nam
        viverra egestas nisi. Praesent vehicula, dui aliquet laoreet volutpat, quam lacus mollis ante, id tempor quam
        libero in velit. Suspendisse eu dolor a lorem tempor sodales ut sed neque. Nunc vel tincidunt lectus, sed
        sagittis dui.
      </p>

      <hr />
      <h2>Contact me</h2>

      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name"/>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email"/>
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3}/>
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Home;