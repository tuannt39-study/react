import { useContext } from 'react';
import { Box } from '@material-ui/core';
import { AuthContext } from '../contexts/AuthContext';

export interface IWelcomeMessageProps {
  position: string;
  country: string;
}

export const WelcomeMessage = (props: IWelcomeMessageProps) => {
  const { position, country } = props;

  const {
    authInfo: { username },
  } = useContext(AuthContext);

  return (
    <Box mb={1}>
      Welcome {username}, {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
