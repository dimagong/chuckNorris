import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import RadioGroupComponent from '../radioGroup/radioGroup.component'
import  JokeComponent from '../../components/joke-component'
import  FavoriteComponent from '../../components/favorite.component'


const LayoutComponent = () => {
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container  maxWidth='xl'>
                <Typography component="div" style={{ backgroundColor: '#FFFFFF', height: '100%'}} >
                    <Grid container  spacing={3} wrap="wrap" justify='center'>
                        <Grid item xs={8}  style={{paddingLeft: 140, minWidth: 700, border:'2px solid red' }}>
                            <Grid item xs={12} style={{ paddingTop: 40}}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '20px', lineHeight: '20px', color: '#333333' }} gutterBottom >
                                    MSI 2020
                                </Typography>
                            </Grid>
                            <Grid item xs={12}> 
                                <Typography style={{ paddingTop: 100, fontWeight: 'bold', fontSize: '32px', lineHeight: '44px', color: '#333333' }} gutterBottom >
                                    Hey!
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography style={{ fontWeight: 500, fontSize: '24px', lineHeight: '44px', color: '#333333' }} gutterBottom >
                                    Let`s try to find a joke for you: 
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 43}}>
                                <Grid item xs={12} >
                                    <RadioGroupComponent />
                                </Grid> 
                                <Grid item xs={12}>
                                    <JokeComponent />
                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid  item xs={4} style={{ border:'2px solid red', backgroundColor: '#F8F8F8', paddingTop: 40}}>
                            <Grid item xs={12} style={{maxHeight: 30,}}>
                                <Typography style={{ fontWeight: '500', fontSize: '20px', lineHeight: '28px', color: '#ABABAB' }} gutterBottom >
                                    Favorite 
                                </Typography>
                            </Grid>
                            <Grid item  xs={12} >
                                <FavoriteComponent  />
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </React.Fragment>
    );
}



export default LayoutComponent
