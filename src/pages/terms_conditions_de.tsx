import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import TermsConditions from "../components/TermsConditions";
import terms_conditions_file from "../assets/pdf/de_terms_and_conditions.pdf";
import SimpleNavBar from "../components/SimpleNavbar";

const TermsConditionsDePage = () => {
  return (
    <>
      <ScrollToTop />
      <SimpleNavBar />
      <TermsConditions pdfFile={terms_conditions_file} />
      <Footer />
    </>
  );
};

export default TermsConditionsDePage;
