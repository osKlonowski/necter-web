import Footer from "../components/Footer";
import TermsConditions from "../components/TermsConditions";
import terms_conditions_file from "../assets/pdf/en_terms_and_conditions.pdf";
import ScrollToTop from "../components/ScrollToTop";
import SimpleNavBar from "../components/SimpleNavbar";

const TermsConditionsPage = () => {
  return (
    <>
      <ScrollToTop />
      <SimpleNavBar />
      <TermsConditions pdfFile={terms_conditions_file} />
      <Footer />
    </>
  );
};

export default TermsConditionsPage;
