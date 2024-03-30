import styled from "styled-components";

export const ContainerFile = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;

    input {
        visibility: hidden;
    }

`

export const Label = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    border: 3px dashed lightgray;
    cursor: pointer;
    /* background-image: url('https://firebasestorage.googleapis.com/v0/b/community-events-ec2b9.appspot.com/o/UFPA%20-%20Copia.png?alt=media&token=b72c7997-7a6c-486c-a0c6-d01b04146518');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed; */
    img {
        min-width: 100%;
        min-height: 100%;
    }
    i {
        font-size: 40px;
        color: lightgray;
    }
`