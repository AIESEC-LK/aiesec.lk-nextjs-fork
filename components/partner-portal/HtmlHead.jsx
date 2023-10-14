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
      <meta
        name="keywords"
        content="AIESEC, Sri Lanka, Youth, Leadership, Global, Internship, Volunteer, Exchange, Opportunities, Global Talent, Global Volunteer, Partnerships"
      />
      <meta
        name="author"
        content="ASL Dev.Team"
      />

      {/* Open Graph Meta Tags (for social media sharing) */}
      <meta property=" og:title" content={title}/>
      <meta property=" og:description" content={description}/>
      <meta property=" og:image" content="/assets/images/bluelogo.png"/>
      <meta property=" og:url" content=" https://aiesec.lk"/>
      <meta property="og:type" content="website"/>

      {/* Twitter Meta Tags (for Twitter card) */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content="/assets/images/bluelogo.png"/>
    </Head>
  )
}

export default HtmlHead;