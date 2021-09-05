import styled from 'styled-components';

export default styled.div`
  padding-top: 65px;
  min-height: 100vh;

  .dashboard-layout {
    display: flex;
    padding-bottom: 50px;

    #left-side-bar {
      width: 300px;
      margin-right: 20px;
      max-height: 830px;
    }

    .block-right {
      width: 100%;
    }
  }
`;