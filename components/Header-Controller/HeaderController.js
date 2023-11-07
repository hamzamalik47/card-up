import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import {
  extractScriptsContent,
  loadAnalyticsBody,
  loadAnalyticsHeader,
  loadCssForHead,
  loadWebsiteCssCode,
  loadWebsiteJsCode,
} from "../../utils/constants";
import Script from "next/script";
import { s3baseUrl } from "../../config/config";

function HeaderController({
  title,
  description,
  url,
  image,
  fav_icon,
  keywords,
  social_link,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="icon" type="image/x-icon" href={fav_icon} />
        <meta name="keywords" content={keywords} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />

        {social_link?.title && (
          <meta property="og:title" content={social_link?.title} />
        )}
        {social_link?.description && (
          <meta property="og:description" content={social_link?.description} />
        )}
        {social_link?.icon ? (
          <meta property="og:image" content={s3baseUrl + social_link?.icon} />
        ) : (
          <meta property="og:image" content={fav_icon} />
        )}
        {/* <!-- Twitter --> */}
        {social_link?.description && (
          <meta property="twitter:card" content={social_link?.description} />
        )}

        {social_link?.title && (
          <meta property="twitter:title" content={social_link?.title} />
        )}
        {social_link?.description && (
          <meta
            property="twitter:description"
            content={social_link?.description}
          />
        )}
        {social_link?.icon ? (
          <meta
            property="twitter:image"
            content={s3baseUrl + social_link?.icon}
          />
        ) : (
          <meta property="twitter:image" content={fav_icon} />
        )}
      </Head>
    </>
  );
}

HeaderController.propTypes = {
  title: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
  url: PropTypes.any.isRequired,
  image: PropTypes.any.isRequired,
  fav_icon: PropTypes.any.isRequired,
  keywords: PropTypes.any.isRequired,
};

export default HeaderController;
