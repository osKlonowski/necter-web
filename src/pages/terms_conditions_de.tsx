import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import TermsConditions from "../components/TermsConditions";
import terms_conditions_file from "../assets/pdf/de_terms_and_conditions.pdf";

const TermsConditionsDePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <TermsConditions pdfFile={terms_conditions_file} />
      <Footer />
    </>
  );
};

export default TermsConditionsDePage;
