import React from 'react';
import { Carousel,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <div>
       
         <marquee>
            NPU Results 2025 out -    check Exam Results here!!! <Link to="/result/loginPage">Click Here</Link> Best of Luck
        </marquee>
      </div>

      <div>


      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img height="350px"
          className="d-block w-100"
          src="image/img.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img height="350px"
          className="d-block w-100"
          src="image/img2.jpg"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
           <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
        </Carousel.Caption> */}
      </Carousel.Item>


      <Carousel.Item>
        <img height="350px"
          className="d-block w-100"
          src="image/img3.webp"
          alt="Third slide"
        />
       
      </Carousel.Item>
   


    <Carousel.Item>
        <img height="350px"
          className="d-block w-100"
          src="image/img4.avif"
          alt="fourth slide"
        />
       
      </Carousel.Item>


      <Carousel.Item>
        <img height="350px"
          className="d-block w-100"
          src="image/study-image.webp"
          alt="fifth slide"
        />
        
      </Carousel.Item>


    </Carousel>
  
      </div>
        <br/>
      <div>
         <Row>
            <Col sm={12} md={4} >
               <h3><Link to="/about">Vision</Link></h3>
               <p className="p-style">The Vision and Mission of the Nilamber Pitamber University reflect its resolve to assiduously pursue and achieve its goals which are aligned with the social expectation of nurturing young talent and engendering high calibre professionals and scholars. The University is committed to being  at the forefront of providing the best tertiary education to its students and acting as a catalyst in shaping a bright and sustainable future for nation. Vision of the Nilamber-Pitamber University can be categorically stated as.</p>
               <Link to="/about" className="btn btn-warning">Read More</Link>
            </Col>

            <Col sm={12} md={4}>
               <h3><Link to="/about">Mission</Link></h3>
               <p className="p-style">The Vision and Mission of the Nilamber Pitamber University reflect its resolve to assiduously pursue and achieve its goals which are aligned with the social expectation of nurturing young talent and engendering high calibre professionals and scholars. The University is committed to being  at the forefront of providing the best tertiary education to its students and acting as a catalyst in shaping a bright and sustainable future for nation. Vision of the Nilamber-Pitamber University can be categorically stated as.</p>
               <Link to="/about" className="btn btn-warning">Read More</Link>
            </Col>

            <Col sm={12} md={4}>
               <h3><Link to="/about">University at a Glance</Link></h3>
               <p className="p-style">Nilamber-Pitambar University (NPU) was established in the year-2009 (17th January 2009) with its headquarter at Daltonganj, now Medininagar, which is also the divisional headquarter of Palamu, Jharkhand. It is situated at a distance of about 175 km from Ranchi, the state capital of Jharkhand. The University imparts education at the Post-graduate level in the faculties of Science, Social Science, Humanities, Commerce, Education, Medicine and Dental education. University departments are engaged in teaching and research and personality developments of the students.  </p>
               <Link to="/about" className="btn btn-warning">Read More</Link>
            </Col>
         </Row>
      </div>
    </>
  );
}

export default HomeScreen
