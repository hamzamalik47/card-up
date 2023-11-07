import Head from 'next/head';
import React from 'react';

const MetaTags = ({ title, description, keywords, url, fav_icon, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <link rel='icon' type='image/x-icon' href={fav_icon} />
      <meta name='keywords' content={keywords} />
      {/*  Open Graph / Facebook  */}
      <meta property='og:type' content='website' />
      {url && <meta property='og:url' content={url} />}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      {/* Twitter */}
      <meta property='twitter:card' content={description} />
      {url && <meta property='twitter:url' content={url} />}
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />{' '}
    </Head>
  );
};

export default MetaTags;
