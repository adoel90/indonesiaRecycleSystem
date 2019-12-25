import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Container, Grid, Button, Card, CardContent, CardMedia, Typography, IconButton,Checkbox, List, Badge, AppBar, Toolbar, Avatar, Box} from '@material-ui/core';
import { deepOrange, green, lightGreen } from '@material-ui/core/colors';
import { navigate } from 'hookrouter';

import { typography } from './Style/Typography';


const useTypography = makeStyles(typography);

const useStyles = makeStyles(theme => ({

    card: {
      display: 'flex',
      margin: theme.spacing(1)
    },

    cardCongrat: {
        minWidth: 275,
        width: 275,
        backgroundColor: green[500]

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
      backgroundColor: 'green',
      ':hover': {

        backgroundColor: 'orange',
      }
    }, 

    /*
      `````
      BADGE
  
      `````
    */

    primary: {

        backgroundColor: '#f50057'
    },

    /*
      `````
      AVATAR
  
      `````
    */
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },
  }));


const ViewCongratulation = props => {

    const classes = useStyles();
    const typo = useTypography();

    return (
        <Grid container>  
            <Grid container direction='row' justify='center' alignItems='center'>
                <Box marginTop={24} marginBottom={2}>
                    <Card className={classes.cardCongrat} variant="outlined" >
                        <CardContent style={{textAlign:'center'}}>
                            <Typography variant='h3' className={typo.title} style={{color: 'white'}}>
                                5 Kg
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>

            

            <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
               
                <Typography variant='subtitle1' className={typo.title}>
                    <i>Selamat tabungan kamu telah berhasil di tambah :)</i>
                </Typography>

                <br />
                <Button 
                    size='small'
                    // onClick={() => navigate('/question-scenario-jemput-gojek')}
                    variant='contained' 
                    color='primary'
                    classes={{
                        containedPrimary: classes.primary
                    }}

                    className={typo.title}
                    
                >
                    Lihat &nbsp; <i>detail</i>
                </Button>

            </Grid>
        </Grid>
    )
};


export default ViewCongratulation;