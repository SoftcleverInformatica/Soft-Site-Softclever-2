import React from 'react'

import PropTypes from 'prop-types'

const CategoriaSolucaoIndustria = (props) => {
  return (
    <>
      <div
        className={`categoria-solucao-industria-categoria-solucao-industria ${props.rootClassName} `}
      >
        <img
          alt={props.Image_alt}
          src={props.Image_src}
          loading="lazy"
          className="categoria-solucao-industria-image"
        />
        <div className="categoria-solucao-industria-container">
          <h2 className="categoria-solucao-industria-text">{props.heading}</h2>
          <span className="categoria-solucao-industria-text1">
            {props.text}
          </span>
          <button className="categoria-solucao-industria-button button">
            {props.button}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .categoria-solucao-industria-categoria-solucao-industria {
            width: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            border-radius: 16px;
            flex-direction: row;
            background-color: var(--dl-color-gray-white);
          }
          .categoria-solucao-industria-image {
            width: 320px;
            height: 180px;
            min-width: 320px;
            align-self: flex-start;
            min-height: 180px;
            object-fit: cover;
            border-radius: 16px;
          }
          .categoria-solucao-industria-container {
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
          .categoria-solucao-industria-text {
            color: var(--dl-color-gray-000000);
            text-align: left;
            transition: 150;
            line-height: 1.5;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .categoria-solucao-industria-text:hover {
            text-decoration: underline;
          }
          .categoria-solucao-industria-text1 {
            color: var(--dl-color-gray-000000);
            text-align: left;
            transition: 150ms;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .categoria-solucao-industria-text1:hover {
            text-decoration: underline;
          }
          .categoria-solucao-industria-button {
            display: none;
            margin-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 991px) {
            .categoria-solucao-industria-image {
              margin-bottom: 0px;
            }
            .categoria-solucao-industria-container {
              margin-right: 0px;
            }
            .categoria-solucao-industria-text {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .categoria-solucao-industria-text1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .categoria-solucao-industria-categoria-solucao-industria {
              width: var(--dl-size-size-xxlarge);
              box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.05);
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .categoria-solucao-industria-image {
              width: 100%;
              height: var(--dl-size-size-large);
              min-width: 0px;
              align-self: center;
              min-height: auto;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            .categoria-solucao-industria-container {
              height: auto;
              align-items: center;
              margin-left: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .categoria-solucao-industria-text {
              margin-top: var(--dl-space-space-unit);
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .categoria-solucao-industria-text1 {
              text-align: justify;
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: 0px;
            }
            .categoria-solucao-industria-button {
              color: #ffffff;
              display: flex;
              font-size: 12px;
              font-style: normal;
              font-weight: 900;
              border-width: 0px;
              border-radius: 20px;
              background-color: var(--dl-color-gray-222222);
            }
            .categoria-solucao-industria-root-class-name {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .categoria-solucao-industria-image {
              min-width: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

CategoriaSolucaoIndustria.defaultProps = {
  text: 'Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica.',
  rootClassName: '',
  heading: 'Indústria e Serviço',
  Image_alt: 'image',
  button: 'SAIBA MAIS',
  Image_src:
    'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGluZHVzdHJ5fGVufDB8fHx8MTY4MTIyNDgxNw&ixlib=rb-4.0.3&h=200',
}

CategoriaSolucaoIndustria.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  Image_alt: PropTypes.string,
  button: PropTypes.string,
  Image_src: PropTypes.string,
}

export default CategoriaSolucaoIndustria
