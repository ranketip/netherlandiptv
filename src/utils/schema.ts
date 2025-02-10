export function generateSchema(location: string) {
    return {
      "@context": "http://schema.org",
      "@type": "Product",
      name:  `IPTV Kopen in ${location} | Beste IPTV Kastje en Abonnementen`,
      brand: "IPTV Kopen",
      description: `Op zoek naar de beste IPTV-abonnementen en IPTV kastjes in ${location}? Bij iptv-kastje-kopen.nl vind je de nieuwste aanbiedingen voor 2025. Vergelijk providers en geniet van legale IPTV in ${location}.`,
      keywords: ["iptv kopen", "iptv kastje", "iptv box", "iptv nederland"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "9.9",
        ratingCount: "5",
        bestRating: "10",
        worstRating: "1",
      },
      offers: {
        "@type": "aggregateOffer",
        availability: "http://schema.org/InStock",
        priceCurrency: "EUR",
        lowPrice: "11.99",
        offerCount: "159",
        highPrice: "59",
      },
    };
  }