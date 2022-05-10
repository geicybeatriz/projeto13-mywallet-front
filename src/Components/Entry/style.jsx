import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height:100vh;

    display: flex;
    flex-direction:column;
    align-items:center;

    background-color:#915dbe;
    padding:10px 24px;
`;

export const NewEntry = styled.div`
    width: 326px;
    height: 70px;

    display:flex;
    justify-content: space-between;
    align-items:center
`;

export const Title = styled.h1`
    width: 250px;
    height: 31px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    color: #FFFFFF;
`;

export const ContainerInputs= styled.form`
    width: 326px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 13px;
`;
export const Input = styled.input`
    width: 326px;
    height: 58px;

    background: #FFFFFF;
    border-radius: 5px;
    border:none;

    display:flex;
    align-items: center;

    padding-left: 15px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #4c4452;
    
    &::placeholder{
        width: 200px;
        height: 23px;

        color: #4c4452
    }
`;

export const Button = styled.button`
    width: 326px;
    height: 46px;

    background-color: #A328D6;
    border-radius: 5px;
    border: none;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
    display:flex;
    align-items: center;
    justify-content: center;
`;