import styled from "styled-components";


const Wrapper = styled.div`
  background-color: #fff;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0px;
  .top-header .nav-custom-menu .account .nav-menu li {
    &:not(:first-child) {
      margin-left: 4px;
    }
  }

  .top-header {
    display: flex;
    justify-content: space-between;

    .nav-mobile {
      display: none;
    }
    padding: 30px;
    margin: 0 10%;

    .group-item-header {
      display: flex;

      .logo {
        margin-right: 30px;
      }
    }

    .nav-custom-menu {
      display: flex;
      align-items: center;

      .account-item {
        color: #000;
        font-size: 16px;
        display: flex;
        align-items: center;

        @media (max-width: 1400px) {
          font-size: 14px;
        }

        p {
          margin: 0;
        }

        .current-user {
          max-width: 200px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      a {
        text-decoration: none;
      }
      .icon-settings {
        color: #707070;
        width: 20px;
        cursor: pointer;
      }
      .nav-menu li {
        border-right: 1px solid #707070;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 5px;

        a {
          font-size: 16px;
          color: #000;
          text-decoration: none;

          &.active {
            color: #55c1c0 !important;
          }
        }
      }
    }

    .item-header {
      display: flex;
      font-size: 16px;
      align-items: center;
      color: #000;
      margin-right: 18px;
      cursor: pointer;
      a{
        margin:0px 25px;
        text-decoration:none;
      }
      &:hover {
        color: #55c1c0;
        text-decoration: none !important;
        a::after {
          border-top: 9px solid #55c1c0 !important;
          @media (max-width: 1400px) {
            border-top: 0.3em solid #55c1c0 !important;
          }
        }
      }

      .show.dropdown {
        .dropdown-toggle {
          color: #55c1c0 !important;
        }
        a::after {
          border-top: 9px solid #55c1c0 !important;
          @media (max-width: 1400px) {
            border-top: 0.3em solid #55c1c0 !important;
          }
        }
      }

      @media (max-width: 1400px) {
        font-size: 14px;
      }

      img {
        width: 18px;
        height: 18px;
        object-fit: contain;
        margin-right: 6px;
      }

      .nav-item {
        width: 100%;
        height: 100%;

        @media (max-width: 1280px) {
          width: unset;
          height: unset;
        }

        .dropdown-toggle {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;

          @media (min-width: 1400px) {
            ::after {
              border-top: 9px solid #000;
              border-left: 6px solid transparent;
              border-right: 5px solid transparent;
              position: absolute;
              top: 18px;
              right: -14px;
            }
          }
        }

        .nav-link {
          color: #000;
          padding: 0;
          text-decoration: none;

          &:hover {
            text-decoration: underline !important;
            color: #55c1c0;
          }
        }
        .dropdown-menu {
          box-shadow: 1px 2px 5px #00000017;
          border: 2px solid #c7c7c7;

          .dropdown-item {
            padding: 0;

            &:active {
              background-color: #f8f9fa;
            }
            &:hover {
              text-decoration: underline !important;
              color: #55c1c0;
            }
          }

          .active {
            color: #29afaf;
          }
          .item-header {
            padding: 0.25rem 1.5rem;
            margin: 5px 0;

            .image-dropdown {
              width: 30px;
              display: flex;
            }
          }
        }
      }
    }

    .active {
      color: #55c1c0 !important;
    }
  }

  @media all and (max-width: 768px) {
    .top-header {
      .logo {
        width: 50%;
      }
      .nav-custom-menu {
        display: none;
      }
      .nav-mobile {
        display: block;
        width: 50%;
        .navbar-nav {
          margin-top: 15px;
          li a {
            color: #5a5655;
          }
        }
      }
    }
    .content {
      .content-notice {
        .notice-title {
          text-align: center;
        }
      }
      .content-list {
        ul {
          li {
            margin-bottom: 25px;
            a {
              p {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }

  .loading-wrapper {
    float: right;

    .spinner-border {
      width: 1rem;
      height: 1rem;
    }
  }

  .btn-show-noti {
    margin-right: 6px;

    a {
      padding: 0;

      ::after {
        display: none;
      }
    }

    .dropdown-menu {
      padding: 0;
      border: none;
    }
  }

  .dropdown.show {
    & > a {
      color: #29afaf !important;
    }
  }
  .btn-show-user-menu {
    cursor: pointer;
    margin-bottom: 4px;

    a {
      color: #707070;
      padding: 0;

      ::after {
        display: none;
      }
    }

    .dropdown-menu {
      background-color: #fff;

      padding: 0;
      border: none;
      background: none;
    }
  }

  .bell-icon {
    display: inline;
    padding-right: 0;

    img {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }

  .notification-badge {
    background-color: #e5731b;
    width: 12px;
    height: 12px;
    position: absolute;
    border-radius: 50%;
    top: 0;
    right: 1px;
  }

  .notification-badge-wrapper {
    position: absolute;
    top: 30%;
    width: 350px;
    right: 110px;
    margin-top: 0.5em;
    padding: 0;
    border: none;
    z-index: 1;
  }

  .company .notification-badge-wrapper {
    right: 110px;
  }

  .disabled-block-route {
    pointer-events: none;
  }
`;
export default Wrapper;
