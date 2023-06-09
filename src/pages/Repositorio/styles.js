import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 150px;
    border-radius: 20%;
    margin: 20px 0;
  }

  h1{
    font-size: 30px;
    color: #0d2636;
  }

  p{
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li{
    display: flex;
    padding: 15px 10px;

    & + li{
      margin-top: 12px;
    }

    img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid gray;
    margin-top: 10px;
    }

    div{
      flex: 1;
      margin-left: 10px;

      p{
        margin-top: 10px;
        font-size: 12px;
        color: #000;
      }
    }

    strong{
      font-size: 15px;

      a{
        text-decoration: none;
        color: #222;
        transition: 0.2s all;

        &:hover{
          color: #0071db;
        }
      }

      span{
        background-color: #222;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        padding: 5px 7px;
        margin-left: 10px;
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  button{
    outline: 0;
    border: 0;
    background-color: rgb(2,0,36);
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    transition: 0.2s all;
    font-weight: 600;

    &:disabled{
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const FilterField = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  strong{
    font-size: 1.25rem;
    margin-right: 20px;
  }
  
  button{
    outline: 0;
    border: 0;
    background-color: rgb(2,0,36);
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    transition: 0.2s all;
    font-weight: 600;

    & + button{
    margin-left: 10px;
    }
  }
`