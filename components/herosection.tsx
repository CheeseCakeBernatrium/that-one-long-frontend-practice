'use client'

import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Hey! It's Martin",
            subtitle: "I'm Doing Computer Science",
            imageUrl: "images/banner_01.jpg",
        },
        {
            title: "Hey! It's Martin",
            subtitle: "I Like Doing Art",
            imageUrl: "images/banner_02.jpg",
        },
        {
            title: "Hey! It's Martin",
            subtitle: "I Like Playing Video Games",
            imageUrl: "images/banner_03.jpg",
        }
    ]

    return (
        <Carousel fade interval={4000} data-bs-theme="dark" style={{boxShadow: "0px 13px 0px #90c290"}}>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div
                        style={{
                            backgroundImage: `url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "90vh",
                        }}
                    >
                    </div>
                    <Carousel.Caption style={{ textShadow: "2px 3px 0px #54428e"}}>
                        <h1 className="display-4 fw-bold text-white">{slide.title}</h1>
                        <p className="lead text-white">{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    );
}

export default HeroSection;