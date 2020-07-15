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
        width: '100%',
        [theme.breakpoints.only('xs')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
        [theme.breakpoints.only('sm')]: {
            paddingLeft: '40px',
            paddingRight: '40px',
            flexWrap: 'nowrap',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '140px',
            paddingRight: '100px',
            width: '60%',
        },
    },
    container: {
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
    },
    header: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '20px',
        color: '#333333',
        flexWrap: 'nowrap',
        width: '200px',
    },
    box_container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexWrap: 'nowrap',
        zIndex: '2',
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

    right_block: {
        backgroundColor: '#F8F8F8',
        [theme.breakpoints.up('md')]: {
            paddingTop: '40px',
            width: '40%',
            minHeight: '100vh',
        },
        [theme.breakpoints.only('sm')]: {
            paddingTop: '40px',
            marginLeft: '15%',
            width: '70%',
            position: 'absolute',
            top: '0px',
            bottom: '0px',
        },
        [theme.breakpoints.only('xs')]: {
            display: 'flex',
            position: 'absolute',
            width: '100%',
            top: '0px',
            bottom: '0px',
            justifyContent: 'center'
        },

    },
    favorite_box: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '100px',
        },
        [theme.breakpoints.only('xs')]: {
            maxWidth: '340px',
            width: '100%',

        },
    },
    text_favorite: {
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '28px',
        color: '#ABABAB',
        margin: '-5px 0 0 10px',
    },
    icon: {
        width: '28px',
        height: '28px',
    },
    icon_pouse: {
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

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl'>
                <Grid container spacing={5}
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
                                    MSI 2020
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
                                        Favorite
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
                                        Favorite
                                    </Typography>
                                </Grid>
                            </Hidden>
                            <Grid item className={classes.favorite_box}>
                                <FavoriteComponent checkHidden={checkHidden} />
                            </Grid>
                        </Grid>
                    </Hidden>

                </Grid>

            </Container>
        </React.Fragment>
    );
}

export default withWidth()(LayoutComponent)
