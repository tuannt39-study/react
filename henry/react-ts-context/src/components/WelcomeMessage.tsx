import { Box } from '@material-ui/core';

export interface IWelcomeMessageProps {
  position: string;
  country: string;
}

export const WelcomeMessage = (props: IWelcomeMessageProps) => {
  const { position, country } = props;
  return <Box mb={1}>Welcome {position} from {country}</Box>;
};

export default WelcomeMessage;
