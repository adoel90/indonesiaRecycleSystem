
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

import TextLoop from "react-text-loop";

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

const ViewLoadingGojek = props => {

    const { classes, match } = props;

    useEffect(() => {

        setTimeout(() => {

            navigate('/congratulation')
        },40000)

    },[])

    return (
        <Container>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Box mt={theme.spacing(3)}>
                    <TextLoop
                        adjustingSpeed={500}
                        interval={10000}
                    >
                        <div>
                            <Typography variant='subtitle2' className={classes.title}>
                                <b>Abang Gojek sedang menjemput tabungan kamu...</b>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='subtitle2' className={classes.title}>
                                <b>Abang Gojek menerima titipan tabungan kamu...</b>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='subtitle2' className={classes.title}>
                                <b>Abang Gojek sedang mengantarkan tabungan kamu<br />
                                ke <i>Bank Sampah Rawajati</i>...</b>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='subtitle2' className={classes.title}>
                                <b><i>Bank Sampah Rawajati</i> sedang menimbang <br />
                                tabungan kamu...</b>
                            </Typography>
                        </div>
                    </TextLoop>

                    <Box mt={theme.spacing(1)} marginLeft={theme.spacing(2.4)}>
                        <CircularProgress color='secondary' size={24} />
                    </Box>

                
                </Box>
            
               
            </Grid>
        </Container>
    )
};


export default withStyles(styles)(ViewLoadingGojek);



