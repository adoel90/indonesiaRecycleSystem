import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Container, Fab,  Grid, Button, Card, CardContent, CardMedia, Typography, IconButton,Checkbox, List, Badge, AppBar, Toolbar} from '@material-ui/core';

import { navigate } from 'hookrouter';

import { typography } from './Style/Typography';


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
    }
  }));

const ViewQuestionScenarioJemput = props => {

    const classes = useStyles();
    const typo = useTypography();

    return (
        <Grid container>
            <Grid item md={12} style={{textAlign: 'center'}}>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Typography variant='subtitle6' className={typo.title}>
                    Jam berapa di jemput ?
                </Typography>

                <br />
                <br />
                <Fab 

                    onClick={() => navigate('/map-gojek')}
                    variant="extended" 
                    size='small'
                    color='primary'
                    classes={{
                        primary: classes.primary
                    }}
                >
                    <Typography variant='subtitle2' className={typo.title}>
                        09.00 pagi hari ini
                    </Typography>
                </Fab>
                <br />
                <br />

                <Fab 
                    variant="extended" 
                    size='small'
                    color='primary'
                    classes={{
                        primary: classes.primary
                    }}
                >
                    <Typography variant='subtitle2' className={typo.title}>
                        10.00 pagi hari ini
                    </Typography>
                </Fab>
                <br />
                <br />

                <Fab 
                    variant="extended" 
                    size='small'
                    color='primary'
                    classes={{
                        primary: classes.primary
                    }}
                >
                    <Typography variant='subtitle2' className={typo.title}>
                        Saya sibuk hari ini, mau cari waktu yang lain
                    </Typography>
                </Fab>
                {/* <Button variant='outlined' className={typo.title}>
                    Tidak
                </Button>
                &nbsp;
                <Button 
                    variant='contained' 
                    color='primary'
                    classes={{
                        containedPrimary: classes.primary
                    }}

                    className={typo.title}
                    
                >
                    Ya
                </Button> */}
            </Grid>
        </Grid>
    )


};

export default ViewQuestionScenarioJemput;