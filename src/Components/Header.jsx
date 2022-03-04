import React from 'react';
import { ButtonToday, ButtonInicial, FiSearchIcon, HeaderStyle, Input, UserIcon, BellIcon, ChatIcon } from './HeaderStyles';

function Header() {
    return (
        <HeaderStyle>
           <ButtonInicial>Página Inicial</ButtonInicial>
           <ButtonToday>Hoje</ButtonToday>
                <Input type="text" placeholder='Pesquisar'/>
                <FiSearchIcon/>
            <BellIcon/>
            <ChatIcon/>
            <UserIcon/>
        </HeaderStyle>
    )
}

export default Header