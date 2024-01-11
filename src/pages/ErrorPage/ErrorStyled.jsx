import styled from 'styled-components'

export const ErrorBody = styled.section`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    div{
        font-size: large;
        padding-top: 2rem;
        font-weight: bold;
    }

    div p {
        cursor: pointer;
        color: black;
    }
`