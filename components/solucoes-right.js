import React from 'react'

import PropTypes from 'prop-types'

const SolucoesRIGHT = (props) => {
  return (
    <>
      <div className={`solucoes-right-feature-card ${props.rootClassName} `}>
        <div className="solucoes-right-container">
          <h2 className="solucoes-right-text">{props.title}</h2>
          <span className="solucoes-right-text1">{props.description}</span>
          <button className="solucoes-right-button button">
            {props.button}
          </button>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="lazy"
          className="solucoes-right-image"
        />
      </div>
      <style jsx>
        {`
          .solucoes-right-feature-card {
            width: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            border-radius: 16px;
            flex-direction: row;
            justify-content: flex-end;
            background-color: var(--dl-color-gray-white);
          }
          .solucoes-right-container {
            height: 180px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .solucoes-right-text {
            color: var(--dl-color-gray-000000);
            align-self: flex-end;
            text-align: left;
            transition: 150;
            line-height: 1.5;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .solucoes-right-text:hover {
            text-decoration: underline;
          }
          .solucoes-right-text1 {
            color: var(--dl-color-gray-000000);
            text-align: left;
            transition: 150ms;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .solucoes-right-text1:hover {
            text-decoration: underline;
          }
          .solucoes-right-button {
            display: none;
            margin-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucoes-right-image {
            width: 320px;
            height: 180px;
            min-width: 320px;
            align-self: flex-start;
            min-height: 180px;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucoes-right-root-class-name2 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name3 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name4 {
            width: 100%;
          }
          .solucoes-right-root-class-name5 {
            width: 100%;
          }
          .solucoes-right-root-class-name6 {
            width: 100%;
          }
          .solucoes-right-root-class-name8 {
            width: 100%;
          }
          .solucoes-right-root-class-name10 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name13 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          @media (max-width: 991px) {
            .solucoes-right-container {
              margin-right: 0px;
            }
            .solucoes-right-text {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .solucoes-right-text1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .solucoes-right-image {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .solucoes-right-feature-card {
              width: var(--dl-size-size-xxlarge);
              align-items: center;
              border-radius: 16px;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucoes-right-container {
              order: 1;
              height: auto;
              align-items: center;
              margin-left: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .solucoes-right-text {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucoes-right-text1 {
              text-align: justify;
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: 0px;
            }
            .solucoes-right-button {
              color: #ffffff;
              display: flex;
              font-size: 12px;
              font-style: normal;
              font-weight: 900;
              border-width: 0px;
              border-radius: 20px;
              background-color: var(--dl-color-gray-222222);
            }
            .solucoes-right-image {
              width: 100%;
              height: var(--dl-size-size-large);
              min-width: auto;
              align-self: center;
              min-height: auto;
            }
            .solucoes-right-root-class-name4 {
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucoes-right-root-class-name5 {
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucoes-right-root-class-name6 {
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucoes-right-root-class-name8 {
              margin-left: auto;
              margin-right: auto;
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

SolucoesRIGHT.defaultProps = {
  image_alt: 'image',
  title: 'Lorem ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  button: 'SAIBA MAIS',
  image_src: '/playground_assets/comercio-varejista-1500w.webp',
  rootClassName: '',
}

SolucoesRIGHT.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolucoesRIGHT
