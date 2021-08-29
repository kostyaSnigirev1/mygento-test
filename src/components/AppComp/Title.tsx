import Typography, { TypographyProps } from '@material-ui/core/Typography';

const Title: React.FC<FormTitleProps> = (props) => {
  const { title, ...other } = props;
  
  return (
    <Typography {...other} color="textPrimary">
      {title}
    </Typography>
  );
};

export { Title };
export default Title;

type FormTitleProps = {
  title: string;
} & Omit<TypographyProps, 'color'>;
