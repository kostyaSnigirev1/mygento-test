import { GridSize } from '@material-ui/core/Grid';

const inputs: fildProps[] = [
  { name: 'Имя', value: 'name', size: 4 },
  { name: 'Фамилия', value: 'surname', size: 7 },
  { name: 'Электронная почта', value: 'email', size: 4 },
];

type fildProps = {
  name: string;
  value: 'name' | 'surname' | 'email';
  size: GridSize;
};


export default inputs