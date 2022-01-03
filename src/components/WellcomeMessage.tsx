import { Box, styled } from '@material-ui/core';
import React, { useContext } from 'react';
import { AuthContext } from 'src/contexts/AuthContex';
const StyledWellcomeMessage = styled(Box)({
  marginBottom: 1,
});
interface wellcomeMessageProps {
  position: string;
  country?: string;
}
const WellcomeMessage = ({
  position,
  country = 'vietnam',
}: wellcomeMessageProps) => {
  const { authInfo } = useContext(AuthContext);

  return (
    <StyledWellcomeMessage>
      wellcome {authInfo.username} {position} from {country}
    </StyledWellcomeMessage>
  );
};

export default WellcomeMessage;
