import React from 'react';
// import useTranslation from 'next-translate/useTranslation';

// import nextI18nextConfig from '@/i18n';

const defaultMeta = {
  title: 'Kit4',
  lang: 'en',
  titleMask: '%s | Kit4',
  description: 'Kit4 description',
};

interface OpenGraph {
  title?: string;
  description?: string;
  locale?: string;
  url?: string;
  type?: string;
  image?: string;
  siteName?: string;
}

interface Meta {
  title?: string;
  titleMask?: string;
  description?: string;
  openGraph?: OpenGraph;
}

export const useHeadMeta = (meta: Meta) => {
  // const { lang } = useTranslation();
  const { lang } = defaultMeta;

  const titleMask = meta.titleMask || defaultMeta.titleMask;
  const title = meta.title ? titleMask.replace('%s', meta.title) : defaultMeta.title;

  const description = meta.description || defaultMeta.description;

  const openGraph = {
    title: meta.openGraph?.title || title,
    description: meta.openGraph?.description || description,
    locale: meta.openGraph?.locale || lang,
    url: meta.openGraph?.url || '',
    type: meta.openGraph?.type || 'website',
    image: meta.openGraph?.image || '',
    siteName: meta.openGraph?.siteName || defaultMeta.title,
  };

  const twitter = {
    card: 'summary_large_image',
    // site: nextI18nextConfig.defaultLocale,
    site: 'en',
    title: openGraph.title,
    description: openGraph.description,
    image: openGraph.image,
  };

  const metaTags = Object.entries({
    title,
    description,
    'og:title': openGraph.title,
    'og:description': openGraph.description,
    'og:locale': openGraph.locale,
    'og:url': openGraph.url,
    'og:type': openGraph.type,
    'og:image': openGraph.image,
    'og:site_name': openGraph.siteName,
    'twitter:card': twitter.card,
    'twitter:site': twitter.site,
    'twitter:title': twitter.title,
    'twitter:description': twitter.description,
    'twitter:image': twitter.image,
  }).reduce<Record<string, string>[]>((acc, [key, value]) => {
    if (value) {
      acc.push({ key, value });
    }
    return acc;
  }, []);

  const metaElements = metaTags.map(({ key, value }) => {
    if (key === 'title') return <title key={key}>{value}</title>;
    return <meta key={key} name={key} content={value} />;
  });

  return metaElements;
};
