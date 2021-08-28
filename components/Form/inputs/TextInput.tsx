import * as React from 'react';
import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/system';

const CustomFormControl = styled(FormControl)((_) => ({
  '& label': {
    lineHeight: '157%',
    marginBottom: 2,
  },
}));

const TextInput = React.forwardRef<HTMLInputElement, CustomFormControlProps>(
  function FCancelIcon(props, ref) {
    const { label, ...other } = props;
    return (
      <CustomFormControl required>
        <Typography component="label">{label}</Typography>
        <TextField {...other} inputRef={ref} />
      </CustomFormControl>
    );
  }
);

export { TextInput };
export default TextInput;

type CustomFormControlProps = { label: string } & Omit<
  OutlinedTextFieldProps,
  'label' | 'variant'
>;
