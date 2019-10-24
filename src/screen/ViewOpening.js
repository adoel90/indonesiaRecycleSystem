
import React,{Component, useState, useEffect, useContext, useRef, Fragment} from 'react';
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider, fade} from '@material-ui/core/styles';
import { 

    Container, Paper, Typography, Grid, TextField, Checkbox, CircularProgress,
    FormControlLabel, Box, Button, MenuItem, Dialog, DialogTitle, DialogContent, 
    DialogContentText, DialogActions, Breadcrumbs, List, ListItem, ListItemText, 
    ListItemAvatar, Avatar, IconButton, InputBase, Divider, Tooltip, Table, Icon,
    TableBody, TableRow, TableCell, TablePagination, TableSortLabel, TableHead, Menu,
    ListItemIcon, Radio, Chip
    
} from '@material-ui/core';

import {useRoutes, navigate } from 'hookrouter';


import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// import ViewOpeningFirst from './ViewOpeningFirst';
// import ViewlistTabungan from './ViewListTabungan';



const theme = createMuiTheme({
  
    palette: {

        primary: {
            
            main: '#24fc03', //#cc0707, #c62828
            light: '#ff5f52',
            dark: '#8e0000',
            contrastText: '#ffffff'
        }
    }

});

const styles = theme => ({

    title : {

        fontFamily: 'Open Sans'
    },
    button: {
        color: 'white',
        fontFamily: 'Open Sans',
      
    },
    buttonOutlined: {

        color: 'grey',
        fontFamily: 'Open Sans',
      
    },

});




const ViewOpening = props => {

    const { classes, match } = props;


    return (
        <Container>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Box mt={theme.spacing(3)}>
                    <Typography  color='initial' variant='h6' className={classes.title }>Sampah apa yang mau kamu tabung ?</Typography>
                </Box>
            </Grid>
            
            <Grid container direction='row' justify='center' alignItems='center'>
                <Box mt={theme.spacing(1)}>
                    <Fab 
                        onClick={() => navigate('/list-products')}
                        size="small" 
                        color="secondary" 
                        aria-label="add" 
                        className={classes.button}
                    >
                            <ArrowDownwardIcon style={{color: theme.palette.primary }} />
                    </Fab>
                </Box>
            </Grid>
        </Container>
    )
};


export default withStyles(styles)(ViewOpening);



