import React from 'react'

import PropTypes from 'prop-types'

const PrimaryPinkButton = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <button className="button buttonSmall">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .button {
            color: var(--dl-color-gray-white);
            outline: none;
            background: linear-gradient(310deg, #7928ca, #ff0080);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
          .rootClassName {
            margin-right: var(--dl-space-space-unit);
          }
          .rootClassName1 {
            margin-right: var(--dl-space-space-unit);
          }
          .rootClassName2 {
            margin-right: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

PrimaryPinkButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

PrimaryPinkButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PrimaryPinkButton
