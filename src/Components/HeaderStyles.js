import styled from 'styled-components';
import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { BsFillChatDotsFill } from "react-icons/bs";

export const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 16px;
    padding: 13px;
    background-color: white;
    margin: 22px;
    min-width: 720px;
`;

export const ButtonInicial = styled.button`
    border-radius: 24px;
    background-color: black;
    color: white;
    border: none;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    min-width: 123px;
    height: 48px;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 400,
`;

export const ButtonToday = styled.button`
    border-radius: 24px;
    background-color: white;
    color: black;
    padding: 5px;
    margin: 5px;
    border: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    min-width: 75px;
    height: 48px;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
`;

export const Input = styled.input`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 65%;
    border-radius: 50px;
    border: none;
    padding-left: 40px;
    font-size: 16px;
    position: relative;
`;

export const FiSearchIcon = styled(FiSearch)`
    position: absolute;
    left: 0;
    top: 8px;
    padding: 25px 10px 10px 275px;
    color: #aaa;
`;

export const BellIcon = styled(GoBell)`
    height: 70px;
    width: 22px;
    margin: 20px;
    display: flex;
    justify-content: flexEnd;
`;

export const ChatIcon = styled(BsFillChatDotsFill)`
    height: 70px;
    width: 22px;
    margin: 8px;
    display: flex;
    align-items: end;
`;

export const UserIcon = styled(BiUser)`
    height: 70px;
    width: 25px;
    padding: 10px;
    margin: 8px;
    display: flex;
    align-items: end;
`;