import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import validationSchema from './validationSchema';
import TextInput from './inputs/TextInput';
import Typography from '@material-ui/core/Typography';
import { Title } from 'components/AppComp';
import inputs from './formData';
import FileInput from './inputs/FileInput';
import { SumbitButton } from 'components/Form/SumbitButton';

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      password: '',
      email: '',
      sex: '',
      site: '',
      file: '' as File | string,
      link: '',
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Title title="Личные данные" variant="h2" sx={{ marginBottom: '24px' }} />
      <Grid container spacing={4}>
        {inputs.map(({ name, value, size }) => (
          <Grid item xs={12} md={size} key={value}>
            <TextInput
              label={`${name} *`}
              id={`${value}-input`}
              name={value}
              placeholder={name}
              value={formik.values[value]}
              onChange={formik.handleChange}
              error={formik.touched[value] && Boolean(formik.errors[value])}
              helperText={formik.touched[value] && formik.errors[value]}
              onBlur={formik.handleBlur}
            />
          </Grid>
        ))}
        <Grid item md={3} xs={12} container alignItems="flex-end">
          <FileInput
            handleFunction={formik.setFieldValue}
            showChangeFileButtom={!formik.values.file || !!formik.errors.file}
            fileName={
              !!formik.values.file &&
              typeof formik.values.file === 'object' &&
              formik.values.file.name
            }
            errorMsg={
              !!formik.touched.email && formik.errors.file && formik.errors.file
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ height: 'auto' }}>
            <Grid container>
              <Title title="Пол *" variant="h2" sx={{ marginBottom: '24px' }} />
              {formik.touched.sex && (
                <FormHelperText error sx={{ paddingLeft: '16px' }}>
                  {formik.errors.sex}
                </FormHelperText>
              )}
            </Grid>
            <RadioGroup row name="sex" onChange={formik.handleChange}>
              <FormControlLabel
                value="men"
                control={<Radio />}
                label="Мужчина"
                labelPlacement="end"
              />
              <FormControlLabel
                value="women"
                control={<Radio />}
                label="Женщина"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={9}>
          <Title
            title="Github"
            variant="h2"
            sx={{ marginBottom: '24px', marginTop: '16px' }}
          />
          <TextInput
            label="Вставьте ссылку на Github"
            id="link-input"
            name="link"
            placeholder="Вставьте ссылку на Github"
            value={formik.values.link}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
      </Grid>
      <SumbitButton isValid={!(formik.isValid && formik.dirty)} />
    </form>
  );
};

export default Form;
