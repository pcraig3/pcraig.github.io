import { css, Global } from '@emotion/react'
import { colours, typograpyStyles } from './utils'

export const globalStyles = (
  <Global
    styles={css`
      @media screen {
        .print-only {
          display: none;
        }
      }

      @media print {
        html {
          font-size: 100% !important;
        }

        #content {
          max-width: none;
        }

        footer,
        .screen-only {
          display: none;
        }
      }

      html {
        font-family: 'Gothic A1', sans-serif;
        overflow-y: scroll;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      *:focus {
        outline: 2px solid ${colours.focus};
      }
      a,
      a:visited,
      button {
        text-decoration: none;
        color: ${colours.primary};
      }

      img {
        max-width: 100%;
        height: auto;
      }

      ::selection {
        color: black;
        background: ${colours.tertiary};
      }

      body,
      #wrapper,
      #content {
        &:focus {
          outline: none;
        }
      }

      .display--none {
        display: none;
      }

      .page-break-before {
        page-break-before: always;
      }

      ${typograpyStyles};
    `}
  />
)
