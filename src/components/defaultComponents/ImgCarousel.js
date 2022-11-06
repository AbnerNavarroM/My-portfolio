import Carousel from 'react-bootstrap/Carousel';

export default function ImgCarousel({ imgSources }) {

  return (
    <Carousel>
      {
        imgSources.map((props, index) => {
          return (
            // Basic Carousel Image Item
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={props.imgSrc ? props.imgSrc : ''}
                alt={props.altDesc ? props.altDesc : ''}
              />
              <Carousel.Caption>
                <h3>{props.title ? props.title : ''}</h3>
                <p>{props.description ? props.description : ''}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
      {/* <div></div> */}
    </Carousel>
  );
}