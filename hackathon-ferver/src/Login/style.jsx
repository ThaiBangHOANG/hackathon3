import styled from 'styled-components';

const LogForm = styled.div`
  .Login {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .containers {
      border: 1px solid black;
      background-color: #1dbf73;
      border-radius: 30px;
      height: 450px;
      width: 300px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.685);
      .content {
        width: 300px;
        height: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        img {
          width: 200px;
          height: 200px;
          border-radius: 100%;
        }
        form {
          font-family: 'Courier New', Courier, monospace;
          font-weight: bold;
          margin-top: 40px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          input {
            width: 200px;
            height: 20px;
            border-radius: 10px;
          }
        }
      }
      .button {
        height: 60px;
        width: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        input {
          border-radius: 15px;
          box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.596);
          border: 0;
          height: 25px;
          width: 80px;
        }
      }
    }
  }
`;

export { LogForm };
