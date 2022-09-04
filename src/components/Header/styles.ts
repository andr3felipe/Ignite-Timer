import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      &:focus {
        outline-style: none;
        box-shadow: none;
        border-color: transparent;
      }

      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-decoration: none;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }

  nav a:first-child {
    &:hover::before {
      content: 'Timer';
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      border-radius: 5px;
      background-color: #09090a;
      padding: 8px 16px;
      top: 80px;
      font-weight: 700;
      color: ${(props) => props.theme.white};
    }

    &:hover::after {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      background-color: #09090a;
      position: absolute;
      transform: rotate(-135deg);
      top: 108px;
      padding: 0;
    }
  }

  nav > a:last-child {
    &:hover::before {
      content: 'Histórico';
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      border-radius: 5px;
      background-color: #09090a;
      padding: 8px 16px;
      top: 80px;
      font-weight: 700;
      color: ${(props) => props.theme.white};
      z-index: 999;
    }

    &:hover::after {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      background-color: #09090a;
      position: absolute;
      transform: rotate(-135deg);
      top: 108px;
      padding: 0;
      z-index: 1;
    }
  }
`
