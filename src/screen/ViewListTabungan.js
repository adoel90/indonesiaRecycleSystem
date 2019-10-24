import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Container, Grid, Button, Card, CardContent, CardMedia, Typography, IconButton} from '@material-ui/core';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import DoneIcon from '@material-ui/icons/Done';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
}));

const ViewListTabungan = () => {

  const classes = useStyles();
  const typo = useTypography();
  const theme = useTheme();


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
  const handleClick = (e, data) => {

    e.preventDefault();

    const selectedIndex = list.indexOf(data.id);

    let newSelected = [];

    if (selectedIndex === -1) {

      newSelected = newSelected.concat(list, data.id);

    } else if (selectedIndex === 0) {

      newSelected = newSelected.concat(list.slice(1));

    } else if (selectedIndex === list.length - 1) {

      newSelected = newSelected.concat(list.slice(0, -1));

    } else if (selectedIndex > 0) {

      newSelected = newSelected.concat(

        list.slice(0, selectedIndex),
        list.slice(selectedIndex + 1),
      );
    };

    console.log("newSelected : ", newSelected);

    // const listWithbject = newSelected.map((item, i) => {
    //   console.log("Item : ", item)

    //   if(item.hasOwnProperty('id')){
      
        
    //       return item;  
        

    //   };
    // })

    // console.log("listWithbject : ", listWithbject);

    setList(newSelected);
  };

  const isSelected = id => list.indexOf(id) !== -1;
 
  return (

      <Container>

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