import * as React from 'react';
import { observer } from 'mobx-react-lite';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import { useStores } from 'utils/useStore';
import { CancelIconLarge } from 'src/Icon';

// use css prop example

const SuccesModal: React.FC = observer(() => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const { modalStore } = useStores();

  const handleClose = () => {
    modalStore.setClearForm();
    modalStore.handleModal('succesModal');
  };

  return (
    <Dialog
      open={modalStore.modal.succesModal}
      onClose={handleClose}
      css={{
        '& .MuiPaper-root': {
          width: 547,
        },
      }}
      aria-labelledby="Succes-Modal"
    >
      <DialogTitle>
        <Typography component="p" variant="h2" textAlign="center">
          Спасибо {modalStore.userName}
        </Typography>
        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            top: 36,
            right: 44,
            display: mobile ? 'none' : 'inline-flex',
          }}
          onClick={handleClose}
        >
          <CancelIconLarge />
        </IconButton>
      </DialogTitle>
      <DialogContent
        css={{
          padding: 0,
          '& > p': {
            color: '#262626',
          },
          [theme.breakpoints.down('md')]: {},
        }}
      >
        <DialogContentText textAlign="center" variant="privatPolicyText">
          Мы скоро свяжемся с вами
        </DialogContentText>
      </DialogContent>
      <DialogActions
        css={{
          padding: '40px 0',
          justifyContent: 'center',
          '& button': {
            width: 360,
            textTransform: 'none',
          },
          [theme.breakpoints.down('md')]: {
            padding: '32px 16px 12px',
            '& button': {
              width: '100%',
            },
          },
        }}
      >
        <Button onClick={handleClose} autoFocus>
          Понятно
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export { SuccesModal };
export default SuccesModal;
