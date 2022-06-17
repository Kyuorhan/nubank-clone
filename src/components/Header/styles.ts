import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 20%;

  padding: 40px 24px 8px 24px;

  background-color: #820AD1;
  justify-content: space-around;
`

export const UpperView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserIconView = styled.View`
  flex-direction: row;
`

export const OptionIcon = styled.View`
  height: 45px;
  width: 45px;

  align-items: center;
  justify-content: center;

  border-radius: 25px;

  background-color: #820AD1;
`

export const TextWelcome = styled.Text`
color: #fff;
font-size: 20px; 
font-weight: bold;     
`