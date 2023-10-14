import Head from "next/head";

const HtmlHead = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/icon.ico"/>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta
        name="description"
        content={description}
      />

      {/* Open Graph Meta Tags (for social media sharing) */}
      <meta property="og:title" content="Partner Portal - AIESEC in Sri Lanka"/>
      <meta property="og:description" content="Explore our partners and opportunities."/>
      <meta property="og:image" content="/path/to/your/social/image.jpg"/>
      {/* Update the image path */}
      <meta property="og:url" content="https://yourwebsite.com"/>
      {/* Update with your website URL */}
      <meta property="og:type" content="website"/>

      {/* Twitter Meta Tags (for Twitter card) */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Partner Portal - AIESEC in Sri Lanka"/>
      <meta name="twitter:description" content="Explore our partners and opportunities."/>
      <meta name="twitter:image" content="/path/to/your/social/image.jpg"/>
      {/* Update the image path */}
    </Head>
  )
}

export default HtmlHead;