import React, { Component } from 'react';
import Chart from '../maingraph';
import './styles.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/Restaurant';
import Food from '@material-ui/icons/RestaurantMenuSharp';
import Add from '@material-ui/icons/Add';
import Create from '@material-ui/icons/Create';
import Menu from '@material-ui/icons/MenuBook';
import Timeline from '@material-ui/icons/Timeline';
import Esport from '@material-ui/icons/FitnessCenter';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import cereal from "./img/Cereais.jpg";
import verduras from "./img/legumes.jpg";
import frutas from "./img/frutas.jpg";
import oleos from "./img/oleos.jpg";
import mar from "./img/mar.jpg";
import carnes from "./img/carnes.jpg";
import leite from "./img/leite.jpg";
import bebidas from "./img/bebidas.jpg";
import ovos from "./img/ovos.jpg";
import doces from "./img/doces.jpg";
import indus from "./img/indus.jpg";
import prontos from "./img/prontos.jpg";
import leguminosas from "./img/leguminosas.jpg";
import nozes from "./img/nozes.jpg";
import foto from "./img/addphoto.jpg";
import { Link } from 'react-router-dom';
import CustomizedDialogs from '../refeicao/index';
import { yellow } from '@material-ui/core/colors';
import Header from '../Header';


const cards = [{ id: 1, nome: "Cereais e Derivados", imagem: cereal },
{ id: 2, nome: "Verduras,Hortaliças e Derivados", imagem: verduras },
{ id: 3, nome: "Frutas e Derivados", imagem: frutas },
{ id: 4, nome: "Gorduras e óleos", imagem: oleos },
{ id: 5, nome: "Pescados e frutos do mar", imagem: mar },
{ id: 6, nome: "Carnes e derivados", imagem: carnes },
{ id: 7, nome: "Leite e Derivados", imagem: leite },
{ id: 8, nome: "Bebidas (alcoólicas e não alcoólicas)", imagem: bebidas },
{ id: 9, nome: "Ovos e derivados", imagem: ovos },
{ id: 10, nome: "Produtos açucarados", imagem: doces },
{ id: 11, nome: "Miscelâneas", imagem: "" },
{ id: 12, nome: "Outros alimentos industrializados", imagem: indus },
{ id: 13, nome: "Alimentos preparados", imagem: prontos },
{ id: 14, nome: "Leguminosas e Derivados", imagem: leguminosas },
{ id: 15, nome: "Nozes e sementes", imagem: nozes }
];
const cards2 = [
  { nome: "Ingerir", imagem: foto },



];

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #76FF03 30%,  #FFFF00 90%)',

  },
  icon: {
    marginRight: theme.spacing(5),


  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),

  },
  cardGrid: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  card: {


    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  card2: {
    height: '100%',
    display: 'flex',
    align: 'center',

    flexDirection: 'column',

  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },


}));

const SampleFab = () => {

  const classes = useStyles();

  return <React.Fragment>

    <Header />
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="xl">
          <div class="um">
            <div class="dois"></div>
          </div>


          <Container className={classes.cardGrid} maxWidth="xl">
            {/* End hero unit */}
            <Grid container spacing={2}>
              {cards2.map(card2 => (
                <Grid item key={card2} sm={4} >
                  <Card className={classes.card2}>
                    <CardMedia

                      className={classes.cardMedia}
                      image={card2.imagem}


                    />

                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">

                      </Typography>
                      <Typography>
                        {card2.nome}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <CustomizedDialogs />



                    </CardActions>
                  </Card>

                </Grid>






              ))}

            </Grid>

          </Container>



          <div className={classes.heroButtons}>
            <Grid container spacing={10} justify="center">
              <Grid item>
                <Button variant="contained" className={classes.root}>
                  Meu desempenho <Timeline className={classes.icon} />
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color={classes.root}>
                  Minha Modalidade <Esport />
                </Button>

              </Grid>

            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>

                <CardMedia


                  className={classes.cardMedia}
                  image={card.imagem}
                  title={card.nome}

                />

                <CardContent className={classes.cardContent}>

                  <Typography gutterBottom variant="h5" component="h2">

                  </Typography>
                  <Typography>
                    {/* //Pode ser uma descrição */}
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button size="small" color="primary" >

                    <Link to={`/alimentos/${card.id}`}>{card.nome}</Link>
                    <Menu className={classes.icon} />

                  </Button>
                  <Button size="small" color="primary">
                    {/* Edit */}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    {/* Footer */}
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
            </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Desenvolvido por Alan Arguelho. Medalha Nutri intervenção de agenda nutriional!
            </Typography>
      <Copyright />
    </footer>
    {/* End footer */}
  </React.Fragment>















}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
          </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default class Grups extends Component {

  componentDidMount() {


    this.loadProducts();

  }

  loadProducts = async () => {







  };
  render() {

    return (
      <SampleFab />

    );

  }







}