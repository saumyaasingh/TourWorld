import React from "react"; 
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () =>{
    const settings ={
        dots: true,
        infinite: true,
        autoplay : true,
        speed : 1000,
        swipeToSlide : true,
        autoplaySpeed : 2000,
        slideshow: 3,

        responsive : [
            {
                breakpoint: 992,
                settings :{
                    slidesToShow: 2,
                    slidesToScroll : 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakPont : 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },

            },

        ]

    }
    return <Slider {...settings}>
        <div className = "testimonial py -4 px-3">
            <p>"Tour World is not just a website; it's a virtual gateway to a world of travel wonders. As an avid explorer, I stumbled upon Tour World and was instantly captivated by its immersive content and user-friendly interface. Navigating through the site felt like embarking on a global adventure from the comfort of my own home. The meticulously curated travel guides, stunning photography, and insightful tips provided by fellow wanderers like John Doe, have become my go-to resource for planning unforgettable journeys. John Doe's enthusiasm and passion for exploration shine through his engaging narratives, making me feel like I'm right there with him, experiencing the beauty of each destination. Whether you're a seasoned traveler or a dreamer seeking inspiration, Tour World is the ultimate companion for anyone eager to discover the diverse cultures and landscapes our planet has to offer. Thanks to John Doe's insightful contributions, Tour World has become my trusted companion in turning travel dreams into reality</p>

             <div className =" d-flex align-items-center gap-4 mt-3">
                <img src = {ava01} className =' w-25 h-25 rounded -2' alt =""/>
                <div>
                    <h6 className = "mb-0 mt-3">john Doe</h6>
                    <p>Customer</p>
                </div>
             </div>
        </div>
        <div className = "testimonial py -4 px-3">
            <p>The ultimate destination for travel enthusiasts and adventure seekers! Our website is your passport to a world of wanderlust, where we curate the most inspiring and breathtaking experiences from every corner of the globe. Immerse yourself in the beauty of diverse cultures, explore hidden gems, and discover the magic of iconic landmarks. Whether you're a seasoned globetrotter or a first-time explorer, Tour World is your trusted companion on the journey to creating unforgettable memories. With expertly crafted itineraries, travel tips, and stunning visuals, we strive to ignite your passion for exploration and open your eyes to the wonders our planet has to offer. Join our vibrant community of travel aficionados, share your adventures, and let the spirit of wanderlust unite us all. Embark on a virtual expedition with Tour World – where the world becomes your playground, and every click is a step towards a new adventure!</p>

             <div className =" d-flex align-items-center gap-4 mt-3">
                <img src = {ava02} className =' w-25 h-25 rounded -2' alt =""/>
                <div>
                    <h6 className = "mb-0 mt-3">Sophie Smith</h6>
                    <p>Customer</p>
                </div>
             </div>
        </div>
        <div className = "testimonial py -4 px-3">
            <p> your ultimate online destination for all things travel! As avid fans of exploration and adventure, we have curated a virtual haven where wanderlust meets convenience. Dive into a world of captivating travel content, from awe-inspiring destination guides to insider tips that unlock the secrets of the globe. Whether you're a seasoned globetrotter or a first-time traveler, our website is your passport to a wealth of information, inspiration, and practical advice. Immerse yourself in vivid narratives, stunning photographs, and expert recommendations that will fuel your desire to discover new horizons. Join our community of travel enthusiasts, where stories are shared, memories are made, and the thrill of the journey is celebrated. At Tour World, we believe that the world is meant to be explored, and our website is your trusted companion on this exhilarating adventure. Embark on a virtual tour with us, and let the magic of travel unfold at your fingertips. Your journey begins here!</p>

             <div className =" d-flex align-items-center gap-4 mt-3">
                <img src = {ava03} className =' w-25 h-25 rounded -2' alt =""/>
                <div>
                    <h6 className = "mb-0 mt-3">Sebastian Mitchell</h6>
                    <p>Customer</p>
                </div>
             </div>
        </div>
    </Slider>
};
export default Testimonials ;