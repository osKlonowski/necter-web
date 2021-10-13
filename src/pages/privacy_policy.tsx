import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import privacy_policy_file from "../assets/pdf/en_privacy_policy.pdf";

const PrivacyPolicyPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <PrivacyPolicy pdfFile={privacy_policy_file} />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
