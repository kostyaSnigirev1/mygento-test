import * as React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { styled } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import { CancelIcon, СlipIcon, PlusIcon } from 'src/Icon';

const CustomButton = styled(Button)<{ component?: string }>(({ theme }) => ({
  width: 256,
  height: 40,
  padding: '8px 6px',
  textTransform: 'initial',
  border: '1px dashed #D9D9D9',
  position: 'relative',

  '&:hover': {
    boxShadow: 'none',
    border: '1px dashed #D9D9D9',
  },

  '& p': {
    textTransform: 'initial',
    color: '#595959',
  },

  '& .MuiButton-startIcon': {
    position: 'absolute',
    left: 8,
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const CustomFileFild = styled(Button)(({ theme }) => ({
  width: 256,
  height: 22,
  justifyContent: 'flex-start',
  padding: '5px',
    border: 'none',
  
  '&:hover': {
    '& .MuiButton-endIcon': {
      display: 'inherit',
    },
    },
  
  '&:focus': {
    '& h6': {
      color: '#096DD9',
    },
    },
  
  '& h6': {
    textTransform: 'initial',
    },
  
  '& .MuiButton-endIcon': {
    marginRight: 0,
    marginLeft: 'auto',
    display: 'none',
    },
  
  '& .MuiButton-startIcon': {
    margin: '0 10px 0 0',
    },
  
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const FileInput: React.FC<CustomInputProps> = ({
  showChangeFileButtom,
  fileName,
  errorMsg,
  handleFunction,
}) => {

  return (
    <FormControl error={!!errorMsg} sx={{ height: 48 }}>
      <input
        id="file"
        style={{ display: 'none' }}
        name="file"
        type="file"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e);

          const file = e.target.files && e.target.files[0];

          file && handleFunction('file', file);
        }}
      />
      <label htmlFor="file">
        {showChangeFileButtom ? (
          <CustomButton
            component="span"
            color="fileColor"
            startIcon={<PlusIcon />}
          >
            <Typography> Загрузить резюме</Typography>
          </CustomButton>
        ) : (
          <CustomFileFild
            variant="outlined"
            endIcon={<CancelIcon />}
            onClick={(e) => {
              e.preventDefault();
              handleFunction('file', '');
            }}
            startIcon={<СlipIcon />}
          >
            <Typography color="primary" variant="subtitle1">
              {fileName && fileName}
            </Typography>
          </CustomFileFild>
        )}
      </label>
      {errorMsg && <FormHelperText>{errorMsg}</FormHelperText>}
    </FormControl>
  );
};

export { FileInput };
export default FileInput;

type CustomInputProps = {
  showChangeFileButtom?: boolean;
  fileName: string | boolean;
  errorMsg?: string | boolean;
  handleFunction: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
};
