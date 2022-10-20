import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>primo júnior</title>
          <meta
            name="description"
            content="primo júnior influenciador e empresário especialista em tecnologia para negócios "
          />
          <meta property="og:title" content="primo júnior" />
          <meta
            property="og:description"
            content="primo júnior influenciador e empresário especialista em tecnologia para negócios "
          />
        </Head>
        <div className="home-container1">
          <a
            href="https://stories.storifyme.com/stories/g-francisco-junior-49065/novidades"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="image"
              src="/playground_assets/img_20220824_110123%20%5B1%5D-300h.png"
              className="home-image"
            />
          </a>
        </div>
        <div className="home-container2">
          <span className="home-text">@oprimojunior</span>
          <img
            alt="image"
            src="/playground_assets/icone-de-conta-verificada-no-instagram-200h.png"
            className="home-image1"
          />
        </div>
        <div className="home-container3">
          <button className="home-button button">Seguir</button>
        </div>
        <div className="home-container4">
          <span className="home-text1">Seja uma pessoa ilimitada</span>
        </div>
        <div className="home-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<storifyme-collection url="https://stories.storifyme.com/widgets/g-francisco-junior-49065/widget/custom/6949">\r\n</storifyme-collection>',
            }}
          />
        </div>
        <div className="home-container5"></div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            min-height: 100vh;
            align-items: flex-start;
            border-color: #ffffff;
            border-width: 1px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 234px;
            display: flex;
            margin-top: 10px;
            align-items: center;
            margin-bottom: 10px;
            justify-content: center;
          }
          .home-link {
            display: contents;
          }
          .home-image {
            width: var(--dl-size-size-xlarge);
            margin-top: 10px;
            object-fit: cover;
            margin-bottom: 10px;
            text-decoration: none;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            margin-left: 2px;
            margin-right: 2px;
          }
          .home-image1 {
            width: var(--dl-size-size-small);
            object-fit: cover;
            margin-left: 2px;
            margin-right: 2px;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-button {
            color: var(--dl-color-gray-white);
            font-size: 27px;
            font-style: normal;
            font-weight: 700;
            background-color: #0095f6;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text1 {
            font-size: 28px;
          }
          .home-html-node {
            width: 100%;
            height: 100%;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            position: relative;
            margin-top: 20px;
            align-items: center;
            margin-bottom: 20px;
            justify-content: center;
          }
          @media (max-width: 479px) {
            .home-image {
              width: var(--dl-size-size-xlarge);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
