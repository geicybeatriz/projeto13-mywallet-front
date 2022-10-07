import styled from "styled-components";


export const Container = styled.div`
    width: 326px;
    height: 446px;
    background-color: #e9f0fb;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 10px 0;
`;

export const List = styled.div`
    width: 100%;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    gap:5px;
    padding:0 16px;

`;
export const ContainerCash = styled.div`
    width: 326px;
    height: 20px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    background-color: #ffffff;
    padding:0 10px;
    gap: 5px;

`;
export const Date = styled.p`
    width: 48px;
    height: 20px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #186068;
`;

export const Description = styled.div`
    width: 250px;
    height: 20px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
`;
export const Valor = styled.div`
    width: 62px;
    height: 20px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;

    color: ${props => props.type === "entrada" ? "#03AC00": "#C70000"};
`;

export const Delete = styled.p`
    width: 10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #186068;
`;

export const Total = styled.div`
    width: 326px;
    height: 20px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    padding:0 16px;
`;
export const Text = styled.div`
    width: 57px;
    height: 20px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    /* identical to box height */
    color: #000000;
`;
export const Result = styled.div`
    width: 63px;
    height: 20px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    /* identical to box height */
    text-align: right;
    /* color: ${props => props.type ? "#C70000": "#03AC00"}; */
`;