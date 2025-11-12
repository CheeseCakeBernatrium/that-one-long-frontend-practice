import NavbarComponent from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavbarComponent></NavbarComponent> {/* done */}
      <main id="action1">
        <HeroSection></HeroSection>
        <Container className="my-5" id="action2">
          <Row className="my-4">
            <Col md={6} className="align-self-center mb-3">
              <h2 style={{ fontSize: "70px" }}>About Us</h2>
              <h6 style={{ fontSize: "30px" }}>What We Do</h6>
              <p style={{ fontSize: "20px" }}>
                Hi! My name is Martin. I'm studying computer science.
                I like to draw and play video games. But, I also like to edit videos and make graphics.
              </p>
              <Button
                variant="info"
                className="mt-3"
                style={{ 
                  backgroundColor: "#54428e", 
                  color: "white", 
                  borderColor: "#54428e", 
                  fontSize: "20px"}}>
                Learn More
              </Button>
            </Col>
            <Col md={6}>
              <p>
                <Image
                  src="/images/about.png"
                  alt="About Us"
                  width={500}
                  height={500}
                ></Image>
              </p>
            </Col>
          </Row>
        </Container>
        <section
          className="d-flex align-items-center mb-5" 
          id="action3" 
          style={{
            minHeight: "200px", 
            paddingBottom: "102px", 
            paddingTop: "30px", 
            backgroundColor: "#8963ba",
            boxShadow: "0px 10px 0px #54428e"}}>
          <WorkSection></WorkSection>
        </section>
        <section 
          className="d-flex align-items-center mb-5" 
          id="action4" 
          style={{
            minHeight: "200px", 
            paddingBottom: "20px", 
            paddingTop: "20px"}}>
          <ServiceSection></ServiceSection>
        </section>
        <section id="contact">
          <ContactSection></ContactSection>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}
