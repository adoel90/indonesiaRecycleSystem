import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Container, Grid, Button, Card, CardContent, CardMedia, Typography, IconButton,Checkbox, List, Badge, AppBar, Toolbar} from '@material-ui/core';

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

const ViewQuestionOne = props => {

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
                    Mau di jemput Abang Gojek ?
                </Typography>

                <br />
                <br />
                <Button size='small'  variant='outlined' className={typo.title}>
                    Tidak
                </Button>
                &nbsp;
                <Button 
                    size='small'
                    onClick={() => navigate('/question-scenario-jemput-gojek')}
                    variant='contained' 
                    color='primary'
                    classes={{
                        containedPrimary: classes.primary
                    }}

                    className={typo.title}
                    
                >
                    Ya
                </Button>
            </Grid>
        </Grid>
    )


};

export default ViewQuestionOne;