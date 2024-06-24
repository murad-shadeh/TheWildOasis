import styled, { css } from "styled-components";

// keep this here too
// notice that inside is a template literal which means we can write javascript inside it.
// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow;"}
// `;
const Heading = styled.h1`
  /* accessing the prop */
  /* customizable 🤩*/
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  line-height: 1.4;
`;
export default Heading;
