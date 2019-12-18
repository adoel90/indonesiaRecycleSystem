import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Box, Container, Grid, Button, Card, CardContent, CardMedia, Typography, IconButton,Checkbox, List, Badge, AppBar, Toolbar} from '@material-ui/core';

import { navigate } from 'hookrouter';

import { typography } from './Style/Typography';
import PictMap from '../assets/map_gojek2.jpg'


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

const ViewScenarioSettingMapGojek = props => {

    const classes = useStyles();
    const typo = useTypography();

    return (
   

                <Fragment>
                  <img width='100%' height='auto' src={PictMap} alt='Map' />
                  <Box>
                    <Button 
                      onClick={() => navigate('/loading-gojek')}
                      // variant='outlined' 
                      // size='small' 
                      variant='contained' 
                      color='primary'
                      classes={{
                          containedPrimary: classes.primary
                      }}
                      fullWidth
                    >
                      <Typography variant='subtitle1' className={typo.title}>

                        Jemput  
                      </Typography>
                    </Button>
                  </Box>
                </Fragment>
              
            
        
    )


};

export default ViewScenarioSettingMapGojek;