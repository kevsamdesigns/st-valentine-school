import React from "react";

export const StructuredDataSchool: React.FC = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "St Valentine Girls Senior School",
    url: "https://stvalentinegirlsseniorschool.co.ke",
    logo: "https://stvalentinegirlsseniorschool.co.ke/favicon.png",
    telephone: "+254 723 948 943",
    address: {
      "@type": "PostalAddress",
      streetAddress: "P.O. Box 2801-90100, Machakos",
      addressLocality: "Machakos",
      addressRegion: "Machakos County",
      postalCode: "90100",
      addressCountry: "KE",
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
};

export default StructuredDataSchool;
