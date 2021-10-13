import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import privacy_policy_file from "../assets/pdf/en_privacy_policy.pdf";
import SimpleNavBar from "../components/SimpleNavbar";

const PrivacyPolicyPage = () => {
  return (
    <>
      <ScrollToTop />
      <SimpleNavBar />
      <PrivacyPolicy pdfFile={privacy_policy_file} />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
