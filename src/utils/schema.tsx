export function generateSchema(location) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Service",
      "name": `IPTV Kopen in ${location} | Beste IPTV Kastje en Abonnementen`,
      "provider": {
        "@type": "Organization",
        "name": "IPTV Kopen",
        "url": "https://iptv-kastje-kopen.nl",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "NL"
        }
      },
      "description": `Op zoek naar de beste IPTV-abonnementen en IPTV kastjes in ${location}? Bij iptv-kastje-kopen.nl vind je de nieuwste aanbiedingen voor 2025. Vergelijk providers en geniet van legale IPTV in ${location}.`,
      "keywords": ["iptv kopen", "iptv kastje", "iptv box", "iptv nederland"],
      "serviceType": "IPTV Service",
      "category": "IPTV Service Provider in Nederland",
      "areaServed": {
        "@type": "City",
        "name": location
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `IPTV kopen ${location}`,
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "IPTV Kastjes",
            "description": `Hoogwaardige IPTV ontvangers voor ${location}`
          },
          {
            "@type": "OfferCatalog",
            "name": "IPTV Kopen",
            "description": `Flexibele IPTV abonnementen voor ${location}`
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "availability": "http://schema.org/InStock",
        "priceCurrency": "EUR",
        "lowPrice": "11.99",
        "highPrice": "59.99",
        "offerCount": "3",
        "offers": [
          {
            "@type": "Offer",
            "name": "Silver IPTV Abonnement",
            "price": "11.99",
            "priceCurrency": "EUR",
            "url": "https://iptv-kastje-kopen.nl/#pricing"
          },
          {
            "@type": "Offer",
            "name": "Gold IPTV Pakket",
            "price": "47.99",
            "priceCurrency": "EUR",
            "url": "https://iptv-kastje-kopen.nl/#pricing"
          },
          {
            "@type": "Offer",
            "name": "Platinum IPTV Box Bundle",
            "price": "59.99",
            "priceCurrency": "EUR",
            "url": "https://iptv-kastje-kopen.nl/#pricing"
          }
        ]
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "9.9",
          "bestRating": "10",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "IPTV Kopen Klant"
        }
      }
    },
    "ratingValue": "9.9",
    "ratingCount": "5",
    "bestRating": "10",
    "worstRating": "1"
  };
}
