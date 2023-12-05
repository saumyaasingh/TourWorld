import React from "react"; 
import './newsletter.css'

import {Container , Row , Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () =>{
   return <section className= "newsletter">
    <Container>
        <Row>
            <Col lg = '6'>
                <div className = "newsletter__content">
                    <h2>Subscribe now to get useful traveling information</h2>

                    <div className = "newsletter__input">
                        <input type = "email" placeholder= "Enter your email"/>
                        <button className = "btn newsletter__btn" > Subscribe </button>
                    </div>
                    <p>Subscribe to the Tour World newsletter today and unlock a treasure trove of valuable travel insights! Be the first to receive expert tips, destination highlights, and exclusive offers directly to your inbox. Don't miss out on the latest trends and must-visit places – join our community of explorers by subscribing now! Your next adventure awaits, and we're here to guide you every step of the way.</p>
                </div>
                </Col>
                <Col lg ='6'>
                    <div className = "newsletter__img">
                        <img src = {maleTourist} alt = " "/>
                    </div>
                </Col>
            
        </Row>
    </Container>
   </section>
};
export default Newsletter;