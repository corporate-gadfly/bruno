import styled from 'styled-components';

const Wrapper = styled.div`
  ul {
    width: 100%;
    padding: 0;
    margin: 0 0 10px;
    padding-left: 1rem;
    border-bottom: 1px solid #cfcfcf;

    li {
      display: inline-flex;
      width: 150px;
      border: 1px solid transparent;
      border-bottom: none;
      bottom: -1px;
      position: relative;
      list-style: none;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 0;
      padding-right: 0;
      cursor: pointer;
      font-size: 0.8125rem;
      height: 38px;

      .tab-container {
        width: 100%;
        border-left: 1px solid #dcdcdc;
        border-right: 1px solid transparent;
      }

      &.active {
        border-color: #cfcfcf;
        background: #fff;
        border-radius: 5px 5px 0 0;

        .tab-container {
          border-left: 1px solid transparent;
        }
      }


      .tab-label {
        overflow: hidden;
      }

      .tab-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;      }

      .close-icon-container {
        min-height: 20px;
        border-radius: 3px;

        .close-icon {
          display: none;
          color: #9f9f9f;
          width: 8px;
          padding-bottom: 6px;
          padding-top: 6px;
        }

        &:hover, &:hover .close-icon {
          background-color: #eaeaea;
          color: rgb(76 76 76);
        }

        .has-changes-icon  {
          height: 24px;
        }
      }

      &.active {
        .close-icon-container .close-icon {
          display: block;
        }
      }

      &:hover{
        .close-icon-container .close-icon {
          display: block;
        }
      }

      &.new-tab {
        vertical-align: bottom;
        width: 34px;
        padding: 3px 0px;
        display: inline-flex;
        justify-content: center;
        color: rgb(117 117 117);
        margin-bottom: 2px;

        > div {
          padding: 3px 4px;
        }

        svg {
          height: 22px;
        }

        &:hover {
          > div {
            background-color: #eaeaea;
            color: rgb(76 76 76);
            border-radius: 3px;
          }
        }
      }
    }

    li.last-tab {
      .tab-container {
        border-right: 1px solid #dcdcdc;
      }

      &.active {
        .tab-container {
          border-right: 1px solid transparent;
        }
      }
    }

    li.active + li {
      .tab-container {
        border-left: 1px solid transparent;
      }
    }

    li:first-child {
      .tab-container {
        border-left: 1px solid transparent;
      }
    }
  }
`;

export default Wrapper;
