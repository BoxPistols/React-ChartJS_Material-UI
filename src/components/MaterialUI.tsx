import React from 'react'
import { Grid, Button, makeStyles, Typography, Paper } from '@material-ui/core'
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    btnStyle: {
        background: 'tomato',
        margin: '24px',
    },
    typoStyle: {
        color: "skyblue"
    },
    paperStyle: {
        background: "lightgray",
        height: "50px",
        textAlign: "center"
    }

})

const MaterialUI: React.FC = () => {
    const css = useStyles()
    return (
        <div>
            <section className='section'>
                <h2>Material UI</h2>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper className={css.paperStyle}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className={css.paperStyle}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className={css.paperStyle}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Paper className={css.paperStyle}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Paper className={css.paperStyle}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Paper className={css.paperStyle}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Paper className={css.paperStyle}>xs=3</Paper>
                    </Grid>
                </Grid>

                <Grid container justify='center'>
                    <>
                        <Typography
                            className={css.typoStyle}
                            color='secondary'
                            variant='h3'
                            align='center'
                            gutterBottom
                            noWrap
                        >
                            Hello Hello Hello Hello Hello Hello Hello Hello
						</Typography>

                        <Button
                            className={css.btnStyle}
                            variant='contained'
                            color='primary'
                        >
                            Button
						</Button>
                    </>
                </Grid>
            </section>
        </div >
    )
}

export default MaterialUI
