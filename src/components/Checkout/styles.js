import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '4%',
    textAlign: 'center',
    fontStyle: 'oblique',
  },
  link: {
    textDecoration: 'none',
    color: "green"
  },
}));