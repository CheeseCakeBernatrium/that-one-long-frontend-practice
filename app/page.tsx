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
      <NavbarComponent></NavbarComponent>
      <main>
        <HeroSection></HeroSection>
        <Container className="my-5">
          <Row className="my-4">
            <Col md={6} className="align-self-center mb-3">
              <h2>About Us</h2>
              <h6>What We Do</h6>
              <p>
                Simply Elementary, Watson
              </p>
              <Button variant="info">Learn More</Button>
            </Col>
            <Col md={6}>
              <p>
                <Image
                  src="/images/about.jpg"
                  alt="About Us"
                  width={500}
                  height={500}
                ></Image>
              </p>
            </Col>
          </Row>
        </Container>
        <section className="bg-dark">
          <WorkSection></WorkSection>
        </section>
        <ServiceSection></ServiceSection>
        <section id="contact">
          <ContactSection></ContactSection>
        </section>
        <section>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}
