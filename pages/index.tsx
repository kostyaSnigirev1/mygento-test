import type { NextPage } from 'next';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { styled } from '@material-ui/system';
import Container from '@material-ui/core/Container';
import { Title } from 'components/AppComp';
import { css } from '@emotion/react';
import Form from '../components/Form';

const titleStyle = css({
  position: 'relative',
});
const PageContainer = styled(Grid)(({ theme }) => ({
  marginTop: 72,
  [theme.breakpoints.down('md')]: {
    marginTop: 4,
  },
}));

const Home: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container css={titleStyle}>
      <PageContainer container spacing={isMobile ? 5 : 6} direction="column">
        <Grid item xs>
          <Title title="Анкета соискателя" variant="h1" />
        </Grid>
        <Grid item xs>
          <Form />
        </Grid>
        <Grid item xs></Grid>
      </PageContainer>
    </Container>
  );
};

export default Home;
