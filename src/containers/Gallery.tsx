import React from 'react';
import { Carousel } from 'react-bootstrap';

const Gallery: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="main-title">Gallery</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin, ipsum at mollis tincidunt, leo
        massa blandit augue, blandit rutrum urna erat eget lorem. Vestibulum ullamcorper hendrerit facilisis. Praesent
        dignissim justo venenatis lorem lacinia, sed dignissim elit tempor. Donec facilisis ultrices libero, sit amet
        aliquam enim posuere a. Maecenas vitae purus tempus, tempor magna sed, rhoncus leo. Suspendisse at sapien
        sagittis elit pharetra dictum. Vivamus pulvinar sem id nunc consectetur, quis rutrum urna tincidunt. Quisque
        lacinia risus eu ex euismod, semper commodo enim fermentum. Quisque quam enim, bibendum vel congue et,
        scelerisque non mauris. Aenean vel est ac mauris posuere consequat tempus non lectus.
      </p>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://kpopping.com/documents/72/1/2000/2(194).jpeg?v=80a76"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First concept photo</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://kpopping.com/documents/30/0/800/41(9).jpeg?v=c79a0"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second concept photo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://kpopping.com/documents/67/3/800/40(9).jpeg?v=c79a0"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third concept photo</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;