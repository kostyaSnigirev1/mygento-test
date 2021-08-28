import * as React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/system';

const CustomSumbitButton = styled(Button)(({ theme }) => ({
  width: 360,
  height: 40,
  marginTop: 48,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  '&:hover': {
    backgroundColor: '#1890FF',
  },
  '& p': {
    lineHeight: '150%',
    textTransform: 'none',
  },
  '&:focus': {
    color: '#096DD9',
  },
}));

const SumbitButton: React.FC<SumbitButtonProps> = (props) => {
  const { isValid, ...other } = props;
  return (
    <CustomSumbitButton
      {...other}
      type="submit"
      color="primary"
      sx={{
        backgroundColor: isValid ? '#E8E8E8' : undefined,
      }}
    >
      <Typography
        sx={{
          color: isValid ? '#BCBCBC' : undefined,
        }}
      >
        Отправить
      </Typography>
    </CustomSumbitButton>
  );
};
export { SumbitButton };
export default SumbitButton;

type SumbitButtonProps = { isValid: boolean } & Omit<
  ButtonProps,
  'type' | 'startIcon' | 'color'
>;
