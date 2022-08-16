import { createGlobalStyle } from "styled-components";

import PoppinsThinItalic from "./fonts/Poppins/Poppins-ThinItalic.ttf"
import PoppinsExtraLightItalic from "./fonts/Poppins/Poppins-ExtraLightItalic.ttf"
import PoppinsLightItalic from "./fonts/Poppins/Poppins-LightItalic.ttf"
import PoppinsRegularItalic from "./fonts/Poppins/Poppins-Italic.ttf"
import PoppinsMediumItalic from "./fonts/Poppins/Poppins-MediumItalic.ttf"
import PoppinsSemiBoldItalic from "./fonts/Poppins/Poppins-SemiBoldItalic.ttf"
import PoppinsBoldItalic from "./fonts/Poppins/Poppins-BoldItalic.ttf"
import PoppinsExtraBoldItalic from "./fonts/Poppins/Poppins-ExtraBoldItalic.ttf"
import PoppinsBlackItalic from "./fonts/Poppins/Poppins-BlackItalic.ttf"

import PoppinsThin from "./fonts/Poppins/Poppins-Thin.ttf"
import PoppinsExtraLight from "./fonts/Poppins/Poppins-ExtraLight.ttf"
import PoppinsLight from "./fonts/Poppins/Poppins-Light.ttf"
import PoppinsRegular from "./fonts/Poppins/Poppins-Regular.ttf"
import PoppinsMedium from "./fonts/Poppins/Poppins-Medium.ttf"
import PoppinsSemiBold from "./fonts/Poppins/Poppins-SemiBold.ttf"
import PoppinsBold from "./fonts/Poppins/Poppins-Bold.ttf"
import PoppinsExtraBold from "./fonts/Poppins/Poppins-ExtraBold.ttf"
import PoppinsBlack from "./fonts/Poppins/Poppins-Black.ttf"

function GlobalStyle() {
  const GlobalStyleHandler = createGlobalStyle`
    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 100;
      src: url(${PoppinsThinItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 200;
      src: url(${PoppinsExtraLightItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 300;
      src: url(${PoppinsLightItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 400;
      src: url(${PoppinsRegularItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 500;
      src: url(${PoppinsMediumItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 600;
      src: url(${PoppinsSemiBoldItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 700;
      src: url(${PoppinsBoldItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 800;
      src: url(${PoppinsExtraBoldItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 900;
      src: url(${PoppinsBlackItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 100;
      src: url(${PoppinsThin}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 200;
      src: url(${PoppinsExtraLight}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      src: url(${PoppinsLight}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      src: url(${PoppinsRegular}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      src: url(${PoppinsMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      src: url(${PoppinsSemiBold}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      src: url(${PoppinsBold}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      src: url(${PoppinsExtraBold}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 900;
      src: url(${PoppinsBlack}) format('truetype');
    }
    
    *,
    *::before,
    *::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    html,
    body,
    .root {
      width: 100%;
      height: 100%;
    }
  `

  return (
    <>
      <GlobalStyleHandler />
    </>
  );
}

export default GlobalStyle;