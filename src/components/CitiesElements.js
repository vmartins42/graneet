import styled from "styled-components";

export const Container = styled.div`
    background: #f3fdff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 100vh;
`;

export const SearchBar = styled.div`
    background: #d2e5e9;
    height: 100px;
    width: 97%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const SearchTitle = styled.span`
    font-size: 30px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 37px;
    float: left;
`;

export const SearchInput = styled.input`
    background: #f0fcff;
    border-radius: 10px;
    width: 75%;
    height: 61px;
    border: none;
    padding-left: 10px;
    ::-webkit-input-placeholder {
        font-size: 20px;
        margin: 10px;
    }
`;

export const CitiesMetropolis = styled.div`
    width: 47%;
    min-height: 80%;
    height:auto;
    background: #d2e5e9;
    border-radius: 10px;
    margin: 10px 0 10px 0;
    @media (max-width: 768px) {
        width: 97%;
        
    }
`;

export const CitiesTitle = styled.span`
    font-family: Montserrat;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    padding-top: 2px;
    width: 100%;
`;

export const  NbCitiesFound = styled.div`
    background: rgba(57, 187, 55, 0.63);
    height:60px;
    color:#FFFFFF;
    width:90%;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const NbCitiesNotFound = styled.div`
    background: rgba(187, 55, 55, 0.63);
    height:60px;
    color:#FFFFFF;
    width:90%;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerCities = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
`

export const ShowMore = styled.span`
    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: ease-in 0.1s;

    &:hover{
        font-weight: bold;
        font-size: 15px;
        transition: ease-in 0.1s;
    }
`

export const CardCity = styled.div`
    background: rgba(22, 28, 41, 0.63);
    height: 60px;
    width: 40%;
    margin: 5px;
    padding: 0 5px 0 5px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
`
export const CityName = styled.span`
    color: #FFFFFF;
`

export const PostalCode = styled.span`
    color:#aeb2bf;
`

export const CitiesOverseas = styled.div`
    width: 47%;
    min-height: 80%;
    height: auto;
    background: #d2e5e9;
    border-radius: 10px;
    margin: 10px 0 10px 0;
    @media (max-width: 768px) {
        width: 97%;
    }
`;

export const OverseasTitle = styled.span`
    font-family: Montserrat;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    padding-top: 2px;
`;
