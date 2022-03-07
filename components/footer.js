import React from 'react'

const Footer = (props) => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="container1">
            <span className="text">Thank you for visiting!</span>
            <span>
              <span>
                Copyright © 2022 Daniel &quot;St. Pinkie&quot; Anthony
              </span>
              <br></br>
              <span>All Rights Reserved unless otherwise stated</span>
            </span>
          </div>
          <div className="container2">
            <div className="container3">
              <span className="text05 large">Company</span>
              <span className="text06 large">About Us</span>
              <span className="text07 large">Careers</span>
              <span className="text08 large">Press</span>
            </div>
            <div className="container4">
              <span className="text09 large">Pages</span>
              <span className="text10 large">Login</span>
              <span className="text11 large">Register</span>
              <span className="text12 large">About</span>
            </div>
            <div className="container5">
              <span className="text13 large">Products</span>
              <span className="text14 large">Free</span>
              <span className="text15 large">PRO</span>
              <span className="text16 large">Latest</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="image"
        />
      </footer>
      <style jsx>
        {`
          .footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .container {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .container2 {
            display: none;
            justify-content: space-between;
          }
          .container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text05 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text06 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text06:hover {
            color: var(--dl-color-gray-white);
          }
          .text07 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text07:hover {
            color: var(--dl-color-gray-white);
          }
          .text08 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text08:hover {
            color: var(--dl-color-gray-white);
          }
          .container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .text09 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text10 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text10:hover {
            color: var(--dl-color-gray-white);
          }
          .text11 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text11:hover {
            color: var(--dl-color-gray-white);
          }
          .text12 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text12:hover {
            color: var(--dl-color-gray-white);
          }
          .container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .text13 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text14 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text14:hover {
            color: var(--dl-color-gray-white);
          }
          .text15 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text15:hover {
            color: var(--dl-color-gray-white);
          }
          .text16 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text16:hover {
            color: var(--dl-color-gray-white);
          }
          .image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .container {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .container {
              flex-direction: column;
            }
            .container1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .container4 {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .container5 {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
