import React from "react"; 
import '../styles/home.css'

import {Container,  Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';

import experienceImg from "../assets/images/experience.png";
import Subtitle from './../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Images-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
const Home = () =>{
    return<>
{/*====================================hero section start==========================================*/}
    <section>
        <Container>
            <Row>
              <Col lg ='6'>
                <div className="hero__content">
                    <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Know Before you go'}/>
                        <img src = {worldImg} alt = ""/>
                    </div>
                    <h1>Traveling opens the door to creating <span
                    className = "highlight">memories</span> </h1>
                    <p>Unlocking Memories, One Journey at a Time with Tour World.
                        
Embark on a journey with Tour World and let the adventure unfold! Traveling not only broadens your horizons but also opens the door to creating memories that are as unique and cute as the hidden gems you'll discover along the way. From charming cobblestone streets to breathtaking landscapes, each destination becomes a canvas for your own picturesque tales. Capture the laughter shared over exotic cuisine, the joy of exploring new cultures, and the warmth of making friends from around the globe. With Tour World, every passport stamp is a page in your personal storybook of cute and unforgettable memories. Join us as we traverse the world, one adorable moment at a time!</p>
                </div>
                </Col>  
                <Col lg = '2'>
                    <div className="hero__img-box">
                        <img src = {heroImg} alt = ""/>
                    </div>
                </Col>
                <Col lg = '2'>
                    <div className="hero__img-box mt-4">
                        <video src = {heroVideo} alt = "" controls/>
                    </div>
                </Col>
                <Col lg = '2'>
                    <div className="hero__img-box mt-5">
                        <img src = {heroImg02} alt = ""/>
                    </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
    </section>
    {/*===============================hero section start===================================*/}
     <section>
        <Container>
            <Row>
                <Col lg ='3'>
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title">We offer our best services</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
     </section>

     {/*=================================featured tour section=================================*/}
     <section>
        <Container>
            <Row>
                <Col lg ='12' className="mb-5 ">
                    <Subtitle subtitle={'Explore'}/>
                   <h2 className="featured__tour-title">Our featured tour</h2>
                </Col>
                <FeaturedTourList/>
            </Row>
        </Container>
     </section>
     {/*=========================featured tour section end===============================*/}
     {/**==========================experience section start ====================== */}
     <section>
        <Container>
            <Row>
                <Col lg ='6'>
                  <div className="experience__content"> 
                  <Subtitle subtitle = {'Experience'}/>
                  <h2>With our all experience <br/>we will serve you</h2> 
                  <p>
                  Welcome to Tour World, where wanderlust meets seamless journeys! Our website has been the compass for countless successful trips, creating a tapestry of memories for avid travelers around the globe. With years of unwavering dedication and a commitment to excellence, we've become the trusted companion for those seeking unforgettable adventures. Our success is not just measured in miles traveled but in the smiles of our satisfied clients who have embarked on remarkable journeys with us. As we celebrate the milestones of our regular clients returning to explore new horizons, we take pride in the expertise that comes with years of experience in crafting dream vacations. Join the community of globetrotters who have discovered the world through Tour World, and let us turn your travel dreams into reality. Explore, experience, and create timeless memories with us!






                    <br/>
                    Where Every Journey Unveils a Tapestry of Treasures!






                  </p>
                  </div>
                  <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                        <span>12k +</span>
                        <h6>Successfull Trip</h6>
                    </div>
                    <div className="counter__box">
                        <span>2k +</span>
                        <h6>Regular clients</h6>
                    </div>
                    <div className="counter__box">
                        <span>12k +</span>
                        <h6>Years experience</h6>
                    </div>
                  </div>
                </Col>
                <Col lg ="6">
                    <div className="experience__img">
                        <img src ={experienceImg} alt = ""/>
                    </div>
                </Col>
                
            </Row>
        </Container>
     </section>
      {/**==========================experiebce section end ====================== */}
      {/**==========================gallery section start ====================== */}
      <section>
        <Container>
            <Row>
                <Col lg ='12'>
                    <Subtitle subtitle = {'Gallery'}/>
                    <h2 className="gallery__title">Visit our customers tour gallery</h2>
                </Col>
                <Col lg ='12'>
                    <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
      </section>
      {/**==========================gallery section end ====================== */}
           {/**==========================testimonial section start====================== */}
<section>
    <container>
        <Row>
            <Col lg = '12'>
                <Subtitle subtitle = {'Fans Love'}/>
                <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg ='12'>
                    <Testimonials/>
                </Col>
        </Row>
    </container>
</section>

            {/**==========================testimonial section end====================== */}
            <Newsletter/>
    </>
   
};
export default Home;