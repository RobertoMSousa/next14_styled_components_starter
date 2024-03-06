
import styled from 'styled-components';
import {__COLORS} from '../theme/theme';

const Wrapper = styled.footer`
  background: ${__COLORS.PRIMARY};
  min-height: 25px;
  padding: ${p => p.theme.spacing}px;
`;
const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
