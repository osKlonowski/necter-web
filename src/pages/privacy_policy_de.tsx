import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import privacy_policy_de_file from "../assets/pdf/de_privacy_policy.pdf";
import SimpleNavBar from "../components/SimpleNavbar";

const PrivacyPolicyDePage = () => {
  return (
    <>
      <ScrollToTop />
      <SimpleNavBar />
      <PrivacyPolicy pdfFile={privacy_policy_de_file} />
      <Footer />
    </>
  );
};

export default PrivacyPolicyDePage;
