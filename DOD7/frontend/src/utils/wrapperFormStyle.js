import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  .container {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    gap: 2rem;
  }

  .poster {
    width: 10rem;
    object-fit: cover;
  }

  .background {
    width: 20rem;
    object-fit: cover;
  }

  .form__upload {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .form__upload:focus + .label_img {
    outline: 3px solid #435ebe;
    outline-offset: 3px;
  }

  .label_img {
    color: #435ebe;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #435ebe;
    transition: all 0.2s;
    width: 10rem !important;
    margin-right: 5rem;
    cursor: pointer;
    :hover {
      background-color: #435ebe;
      padding: 0.25rem 0.5rem;
      color: #fff;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
  .img {
    width: 10rem;
  }
`;
