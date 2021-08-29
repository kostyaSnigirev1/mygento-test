import * as React from 'react';
import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import inputs from './formData';
import validationSchema from './validationSchema';
import { TextInput, FileInput, CusomCheckbox } from './inputs';
import { SumbitButton } from './SumbitButton';
import { Title } from 'src/components/AppComp';
import { useStores } from 'utils/useStore';

const Form: React.FC = observer(() => {
  const { modalStore } = useStores();
  const agree = modalStore.privacyCloseType === 'agree';

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
      agree: false,
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      modalStore.setUserName(values.name);
      modalStore.handleModal('succesModal');
    },
  });

  React.useEffect(() => {
    if (agree) {
      formik.setFieldValue('agree', agree);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agree]);

  React.useEffect(() => {
    if (modalStore.clearForm) {
      formik.resetForm();
      modalStore.setClearForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalStore.clearForm]);

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
            <RadioGroup
              row
              name="sex"
              value={formik.values.sex}
              onChange={formik.handleChange}
            >
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
        <Grid item xs={12} md={9}>
          <FormControl error={!!formik.errors.agree}>
            <FormControlLabel
              value={formik.values.agree}
              control={
                <CusomCheckbox
                  name="agree"
                  checked={!!formik.values.agree}
                  onChange={formik.handleChange}
                />
              }
              label={
                <Typography variant="subtitle1" sx={{ whiteSpace: 'nowrap' }}>
                  * Я согласен с{' '}
                  <Link
                    component="button"
                    sx={{ fontSize: 14, verticalAlign: 'unset' }}
                    onClick={(
                      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => {
                      e.preventDefault();
                      modalStore.handleModal('privacyPolicyModal');
                    }}
                  >
                    политикой конфиденциальности
                  </Link>
                </Typography>
              }
              labelPlacement="end"
            />
            {formik.errors.agree && (
              <FormHelperText>{formik.errors.agree}</FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
      <SumbitButton isValid={!(formik.isValid && formik.dirty)} />
    </form>
  );
});

export default Form;
