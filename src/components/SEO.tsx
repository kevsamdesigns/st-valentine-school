import { useEffect } from "react";

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string; // path after domain
  noIndex?: boolean;
};

const SITE_DOMAIN = "https://www.stvalentinegirlsseniorschool.co.ke";

export const SEO = ({ title, description, keywords, path, noIndex }: Props) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name: string, content?: string, prop = false) => {
      if (!content) return;
      const selector = prop ? `meta[property=\"${name}\"]` : `meta[name=\"${name}\"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (prop) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", path ? `${SITE_DOMAIN}${path}` : SITE_DOMAIN, true);
    setMeta("og:image", "/favicon.png", true);
    setMeta("og:site_name", "St. Valentine Girls Senior School", true);

    // Twitter cards
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", "/favicon.png");

    // canonical
    const canonicalHref = path ? `${SITE_DOMAIN}${path}` : SITE_DOMAIN;
    let link = document.head.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalHref);

    return () => {
      // do not remove tags on unmount to keep consistent site-wide tags
    };
  }, [title, description, keywords, path, noIndex]);

  return null;
};

export default SEO;
