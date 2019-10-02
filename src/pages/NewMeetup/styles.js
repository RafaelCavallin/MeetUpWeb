import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(38, 29, 44, 1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input[name='description'] {
      height: 200px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #f84c69;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      display: flex;

      &:hover {
        background: ${darken(0.03, '#F84C69')};
      }
    }

    > button {
      height: 42px;
      width: 170px;
      border: 0;
      background: #d44059;
      border-radius: 4px;
      padding: 0 15px;

      display: flex;
      align-items: center;

      span {
        color: #fff;
        margin-left: 10px;
      }
    }
  }
`;
