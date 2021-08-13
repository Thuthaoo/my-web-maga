import styled from 'styled-components';

export default styled.ul`
  margin-top: 0.5em;
  padding: 0;
  border: 2px solid #ddd;
  z-index: 1;
  background: #fff 0% 0% no-repeat padding-box;
  box-shadow: 1px 2px 5px #00000017;
  border: 2px solid #c7c7c7;
  border-radius: 5px;
  opacity: 1;

  .item-header {
    margin: 0 !important;
    width: 220px;
    padding-left: 45px !important;

    img {
      margin-right: 10px;
    }
  }

  .logout {
    background: ${({ theme }) => theme.color['primary-color']};
    a {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
      }
    }
    &:hover {
      background: ${({ theme }) => theme.color['primary-color']};
      a {
        color: #fff;
      }
    }
  }
  li {
    height: 50px;
    line-height: 50px;
    list-style: none;
    a {
      text-decoration: none;
      color: #000;
      display: block;
    }
    &:hover {
      background: #f0f0f0;
      a {
        color: ${({ theme }) => theme.color['primary-color']};
      }
    }
  }

  .active {
    color: #55c1c0 !important;
  }

  .help-icon {
    width: 18px;
    height: 18px;
    margin-right: 6px;
    border-radius: 50%;
    background: #29afaf;
    text-align: center;
    line-height: 20px;
    font-weight: 700;
    color: #ffffff;
  }
`;
