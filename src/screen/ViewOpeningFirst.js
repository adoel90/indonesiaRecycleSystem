
/*
  ````````
  Not USED

  ````````
*/


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

import { BrowserRouter as Router, Route, Switch, Redirect,NavLink, Link} from "react-router-dom";


import ViewOpening from './ViewOpening';
import ViewlistTabungan from './ViewListTabungan';

import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
        // background: '#24fc03',
        // '&:hover' : {
        //     background: 'green',
            
        // },
        


    }
});




const ViewOpeningFirst = props => {

    const { classes, match } = props;


    return (
        <Container>

            
            <Switch>
                    {/* <Route
                        exact
                        path={`${match.path}`}
                        render={() => <Redirect replace to={`${match.path}`} />}
                    /> */}

                    <Route 
                        path={`${match.path}`} 
                        render = { (props) => (

                                <ViewOpeningFirst 
                                    {...props}
                                    classes = { classes }

                                    
                                />
                            )}
                    />

                    <Route 
                        path={`${match.path}listtabungan`} 
                        render = { (props) => (

                                <ViewlistTabungan 
                                    {...props}
                                    classes = { classes }

                                    
                                />
                            )}
                        // component={Moderator} 
                    />

          



                </Switch>
        </Container>
    )
};


export default withStyles(styles)(ViewOpeningFirst);



