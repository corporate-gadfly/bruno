import styled from 'styled-components';

const Wrapper = styled.div`
  .dropdown-toggle {
    &:hover {
      color: black;
    }
  }

  .tippy-box {
    min-width: 135px;
    background-color: white;
    font-size: 0.8125rem;
    color: rgb(48 48 48);
    background: #f9f9f9;
    box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;

    .tippy-content {
      padding-left: 0;
      padding-right: 0;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;

      .dropdown-item {
        display: flex;
        align-items: center;
        padding: .35rem .6rem;
        cursor: pointer;

        &:hover {
          background-color: #e9e9e9;
        }
      }
    }
  }
`;

export default Wrapper;