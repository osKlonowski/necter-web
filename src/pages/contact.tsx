import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SimpleNavBar from "../components/SimpleNavbar";

const ContactPage = () => {
  return (
    <>
      <ScrollToTop />
      <SimpleNavBar />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
