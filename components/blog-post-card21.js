import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard21 = (props) => {
  return (
    <>
      <div
        className={`blog-post-card21-blog-post-card ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="blog-post-card21-image"
        />
        <div className="blog-post-card21-container">
          <div className="blog-post-card21-container1">
            <span className="blog-post-card21-text">{props.label}</span>
            <span className="blog-post-card21-text1">{props.when}</span>
          </div>
          <h1 className="blog-post-card21-text2">{props.title}</h1>
          <span className="blog-post-card21-text3">{props.description}</span>
          <div className="blog-post-card21-container2">
            <div className="blog-post-card21-profile">
              <img
                alt={props.profile_alt}
                src={props.profile_src}
                className="blog-post-card21-image1"
              />
              <span className="blog-post-card21-text4">{props.author}</span>
            </div>
            <span className="blog-post-card21-text5">Read More -&gt;</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card21-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card21-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card21-image {
            width: 350px;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .blog-post-card21-container {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .blog-post-card21-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card21-text {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .blog-post-card21-text1 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .blog-post-card21-text2 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card21-text3 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card21-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card21-profile {
            display: flex;
            align-items: center;
          }
          .blog-post-card21-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-card21-text4 {
            font-style: normal;
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card21-text5 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-weight: 500;
          }

          @media (max-width: 991px) {
            .blog-post-card21-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card21-blog-post-card {
              flex-direction: column;
            }
            .blog-post-card21-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .blog-post-card21-container2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-post-card21-text5 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard21.defaultProps = {
  when: '3 days ago',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  profile_alt: 'profile',
  author: 'Jane Doe',
  image_alt: 'image',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  title: 'Lorem ipsum dolor sit amet',
  label: 'ENTERPRISE',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
}

BlogPostCard21.propTypes = {
  when: PropTypes.string,
  profile_src: PropTypes.string,
  profile_alt: PropTypes.string,
  author: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard21
