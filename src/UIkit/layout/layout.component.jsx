import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import CancelIcon from '@material-ui/icons/Cancel'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled'

import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'

import RadioGroupComponent from '../radioGroup/radioGroup.component'
import JokeComponent from '../../components/joke-component'
import FavoriteComponent from '../../components/favorite.component'


const useStyles = makeStyles((theme) => ({
    root: {
        border: '10px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'nowrap',
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
    },
    root_dark: {
        border: '10px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'nowrap',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
    },
    left_block: {
        border: '2px solid red',
        minHeight: '100%',
        width: '100%',
        [theme.breakpoints.only('xs')]: {
            paddingLeft: '40px',
            //minWidth: '100%',
            minHeight: '100%',
            width: '100%',
        },
        [theme.breakpoints.only('sm')]: {
            paddingLeft: '40px',
            minHeight: '100%',
            width: '100%',
            flexWrap: 'nowrap',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '140px',
            width: '65%',
            minHeight: '100%',
        },
    },
    // left_content_hidden: {
    //     [theme.breakpoints.only('xs')]: {
    //         //display: 'none',
    //         width: '100vw',
    //     },
    // },
    container: {
        //border: '5px solid purple',
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        //justifyContent:'space-between',
    },
    header: {
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '20px',
        color: '#333333',
    },
    header_text: {
        paddingTop: 100,
        fontWeight: 'bold',
        fontSize: '32px',
        lineHeight: '44px',
        color: '#333333',
    },
    header_text_next: {
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '44px',
        color: '#333333',
    },
    box_container: {
        //border: '2px solid green',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '80%',
        flexWrap: 'nowrap',
        zIndex: '2',
    },
    jokecomponent: {
        minWidth: '250px',
        [theme.breakpoints.down('md')]: {
            margin: '0 auto',
        },
    },

    right_block: {
        border: '5px solid blue',
        backgroundColor: '#F8F8F8',
        paddingTop: '40px',


        [theme.breakpoints.up('md')]: {
            width: '35%',
            minHeight: '100vh',
            //height: '100%',
        },
        [theme.breakpoints.only('sm')]: {
            marginLeft: '15%',
            //zIndex: '1',
            //minHeight: '100vh',
            width: '70%',
            //height: '100%',
            //flexGrow: 2,
            //zIndex: '1',
            position: 'absolute',
            top: '0px',
            bottom: '0px',
        },
        [theme.breakpoints.down('xs')]: {
            position: 'absolute',
            width: '100%',
            top: '0px',
            bottom: '0px',
            //zIndex: '1',
        },

    },
    favorite_sm: {
        //border: '2px solid purple',
        [theme.breakpoints.down('sm')]: {
            marginTop: '100px',
        },
    },
    text_favorite: {
        //border: '2px solid yellow',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '28px',
        color: '#ABABAB',
        margin: '2px 0 0 10px',
    },
    icon: {
        width: '28px',
        height: '28px',
    },
    icon_pouse: {
        //border: '2px solid yellow',
        width: '28px',
        height: '28px',
        transform: 'rotate(90deg)',

    },
}));


const LayoutComponent = ({ width }) => {
    const classes = useStyles();
    
    const [checkHidden, onCheckHidden] = useState(false)
    const changeCheck = () => {
        onCheckHidden(!checkHidden)
    }
    console.log('checkHidden', checkHidden)

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl' style={{ height: '100%', width: '100%' }} >

                <Grid container spacing={3}
                    className={(!checkHidden)
                        ? classes.root
                        :
                        classes.root_dark
                    }
                >

                    <Grid className={classes.left_block} >
                        <Grid container item className={classes.container}  >
                            <Grid >
                                <Typography className={classes.header} gutterBottom >
                                    MSI 2020 {width}
                                </Typography>
                            </Grid>
                            <Grid container className={classes.box_container} >
                                <Hidden mdUp>
                                    {!checkHidden ?
                                        <PauseCircleFilledIcon onClick={changeCheck} className={classes.icon_pouse} />
                                        :
                                        <CancelIcon onClick={changeCheck} className={classes.icon} />
                                    }
                                    <Typography className={classes.text_favorite} gutterBottom >
                                        Favorite-left
                                            </Typography>
                                </Hidden>

                            </Grid>
                        </Grid>
                        <Grid item >
                            <Typography className={classes.header_text} gutterBottom >
                                Hey!
                                </Typography>
                        </Grid>
                        <Grid item  >
                            <Typography className={classes.header_text_next} gutterBottom >
                                Let`s try to find a joke for you:
                                </Typography>
                        </Grid>
                        <Grid container style={{ marginTop: 43 }}>
                            <Grid >
                                <RadioGroupComponent />
                            </Grid>
                            <Grid className={classes.jokecomponent} >
                                <JokeComponent />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Hidden smDown={checkHidden ? false : true} >
                        <Grid className={classes.right_block}>
                            <Hidden smDown>
                                <Grid item   >
                                    <Typography className={classes.text_favorite} gutterBottom >
                                        Favorite11111
                                        </Typography>
                                </Grid>
                            </Hidden>
                            {/* <Hidden mdUp>
                                        {checkHidden ?
                                        <CancelIcon onClick={changeCheck} className={classes.icon} />
                                        :
                                        <PauseCircleFilledIcon onClick={changeCheck} className={classes.icon_pouse} />
                                        }
                                        <Typography className={classes.text_favorite} gutterBottom >
                                            Favorite-right
                                        </Typography>
                                </Hidden> */}
                            <Grid item className={classes.favorite_sm}>
                                <FavoriteComponent checkHidden={checkHidden}/>
                            </Grid>
                        </Grid>
                    </Hidden>

                </Grid>

            </Container>
        </React.Fragment>
    );
}



export default withWidth()(LayoutComponent)
