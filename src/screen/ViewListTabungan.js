import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Container, Grid, Button, Card, CardContent, CardMedia, Typography, IconButton,Checkbox, List, Badge, AppBar, Toolbar} from '@material-ui/core';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import DoneIcon from '@material-ui/icons/Done';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SendIcon from '@material-ui/icons/Send';

import {navigate } from 'hookrouter';

import { typography } from './Style/Typography';

import PictBoncos from '../assets/sampah_boncos.jpeg';
import PictBotolBening from '../assets/sampah_botol_bening.jpeg';
import PictGabruk from '../assets/sampah_gabruk.jpeg';



const useTypography = makeStyles(typography);

const useStyles = makeStyles(theme => ({

  card: {
    display: 'flex',
    margin: theme.spacing(1)
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    // flex: '1 0 auto',
    width: 240,
    maxWidth: 300,


  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginLeft:  theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38,
  },

  /*
    ``````````````````````
    colorSecondary APP BAR

    ``````````````````````
  */
  colorSecondary: {
    // color: theme.palette.primary,
    backgroundColor:'white'
  },

  /*
    `````
    BADGE

    `````
  */
  colorPrimary: {
    // color: 'green'
    backgroundColor: 'green'
  } 
}));

const ViewListTabungan = () => {

  const classes = useStyles();
  const typo = useTypography();
  // const theme = useTheme();


  /*
        -------------------
      |                     |
      | COMPONENT DID MOUNT |
      |                     |
        -------------------

  */
  const [list, setList ] = useState([]);

  useEffect(() => {

    setList(data);

  },[]);  


  /*
      ----------------------
    |                        |
    | HANDLE MULTIPLE CHOOSE |
    |                        |
      ----------------------

  */

  const [jumlahTerpilihState, setJumlahTerpilihState ] = useState([]);  


  let jumlahTerpilih = []
     
  let newSelected = [];
  
  const handleClick = (e, data) => {

    console.log("Data : ", data );

    // jumlahTerpilih.push(data);
    // setJumlahTerpilihState([...jumlahTerpilih])
    // console.log("jumlahTerpilih : ", jumlahTerpilih)
    // console.log("jumlahTerpilih : ", jumlahTerpilih.length)
    e.preventDefault();

    const selectedIndex = list.indexOf(data.id);

    if (selectedIndex === -1) {

      newSelected = newSelected.concat(list, data.id);


    } else if (selectedIndex === 0) {

      newSelected = newSelected.concat(list.slice(1));

    } else if (selectedIndex === list.length - 1) {

      newSelected = newSelected.concat(list.slice(0, -1));

    } else if (selectedIndex > 0) {

      newSelected = newSelected.concat(

        // list.slice(0, selectedIndex),
        list.slice(selectedIndex + 1),
      );
    };
    console.log("NewSleelcted : ", newSelected);

    setList(newSelected);

  };

  console.log("List : ", list)

  const isSelected = id => list.indexOf(id) !== -1;
 
  return (

      <Container>

              <AppBar
                position="fixed"
                color='secondary'
                classes={{
                  colorSecondary: classes.colorSecondary
                }}
              
            >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Badge 
                className={classes.margin} 
                badgeContent={jumlahTerpilihState.length} 
                color="primary"
                classes={{
                  colorPrimary: classes.colorPrimary
                }}
                >
                <ShoppingCartIcon color='secondary' />
              </Badge>

            </IconButton>
            <Grid container spacing={8} alignItems="flex-end"></Grid>
            <Button 
              size='small'
              onClick={() => navigate('/question-one')}
              color="secondary"
              endIcon={
                <SendIcon />
              }
              >
                <Typography 

                  variant="subtitle1" 
                  className={typo.title}
                >
                  Lanjut
                </Typography>
            </Button>
          </Toolbar>
        </AppBar>

        <br />
        <br />
        <br />


          {
            list.length > 0  &&  list.map((item, i) => {

              const isItemSelected = isSelected(item.id);

              
              return (
                <Grid container direction='row' justify='center' alignItems='center' key={i}>
                
                <Card className={classes.card} >
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h6" variant="h6" className={typo.title}>
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary"  className={typo.title}>
                        {item.price}
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}>

                      
                     
                      <Button 
                        onClick={(e) => handleClick(e, item)}
                        size='small' variant='outlined' className={typo.buttonOutlined} 
                        endIcon={isItemSelected && <CheckCircleOutlineIcon style={{color: 'green'}} />}
                        // onSelect={isItemSelected}
                        // disabled={isItemSelected}
                      >
                        Tabung ini

                      </Button>
                         
                     
                      
                    </div>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image={item.image}
                    title={item.title}
                  />
                </Card>
                </Grid>
              )
            })
          }
      </Container>

  );
};

export default ViewListTabungan;

let data = [

  {
    id: 1,
    title : 'Sampah Boncos',
    price: 'Rp 10,000,-/kg',
    image: PictBoncos
  },
  {
    id: 2,
  title : `Sampah Botol bening`,
    price: 'Rp 10,000,-/kg',
    image: PictBotolBening
  },
  {
    id: 3,
    title : 'Sampah Gabruk',
    price: 'Rp 10,000,-/kg',
    image: PictGabruk
  },

]