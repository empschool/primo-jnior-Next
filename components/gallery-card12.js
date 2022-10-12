import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard12 = (props) => {
  return (
    <>
      <div className={`gallery-card12-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="gallery-card12-image"
        />
        <h2 className="gallery-card12-text">{props.title}</h2>
        <span className="gallery-card12-text1">{props.subtitle}</span>
      </div>
      <style jsx>
        {`
          .gallery-card12-gallery-card {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card12-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-card12-text {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .gallery-card12-text1 {
            color: var(--dl-color-gray-500);
            align-self: flex-start;
          }

          @media (max-width: 767px) {
            .gallery-card12-gallery-card {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .gallery-card12-image {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard12.defaultProps = {
  title: 'Project Title',
  rootClassName: '',
  subtitle: 'Lorem ipsum dolor sit amet',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  image_alt: 'image',
}

GalleryCard12.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GalleryCard12
