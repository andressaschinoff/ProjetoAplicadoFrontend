import styled from 'styled-components';

const MenuHeader = styled.header`
  width: 100vw;
  display: grid;
  grid-template-columns: 170px auto;
  padding: 10px;
`;

const MenuSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LogoSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MenuImg = styled.img`
  width: 50px;
  height: 50px;
`;

export { LogoSection, MenuHeader, MenuImg, MenuSection };
