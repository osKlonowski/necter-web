import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import privacy_policy_file from "../../assets/pdf/en_privacy_policy.pdf";
import { PageFlipperBtn, PdfPageWrapper } from "./PrivacyPolicyElements";

function PrivacyPolicy() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number | any }) {
    setNumPages(numPages);
  }

  function nextPage() {
    const nextPageIndex = pageNumber + 1;
    if (nextPageIndex <= numPages) {
      setPageNumber(nextPageIndex);
    }
  }

  function prevPage() {
    const prevPageIndex = pageNumber - 1;
    if (prevPageIndex > 0) {
      setPageNumber(prevPageIndex);
    }
  }

  return (
    <PdfPageWrapper>
      <PageFlipperBtn onClick={prevPage}>
        <h1>Prev</h1>
      </PageFlipperBtn>
      <Document
        file={privacy_policy_file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} height={window.innerHeight - 80} />
      </Document>
      <PageFlipperBtn onClick={nextPage}>
        <h1>Next</h1>
      </PageFlipperBtn>
    </PdfPageWrapper>
  );
}

export default PrivacyPolicy;
