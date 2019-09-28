import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #fff;
    }

    a {
      height: 42px;
      border: 0;
      background: #d44059;
      border-radius: 4px;
      padding: 0 15px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: #fff;
        margin-left: 10px;
      }
    }
  }

  ul {
    display: grid;
    grid-gap: 10px;
    margin-top: 25px;
  }
`;

export const Meetup = styled.li`
  width: 100%;
  height: 50px;
  background: #261f2d;
  border-radius: 4px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #fff;
    font-size: 16px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #666;
      font-size: 14px;
      margin-right: 10px;
    }

    button {
      border: 0;
      background: none;
    }
  }
`;
