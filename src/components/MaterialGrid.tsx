import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles({
    demoStyle: {
        margin: '24px auto',
        maxWidth: '960px',
    },
    paperStyle: {
        background: 'lightgray',
        height: '50px',
        textAlign: 'center',
    },
})

const MaterialGrid: React.FC = () => {
    const styled = useStyles()
    return (
        <div>
            <Grid
                className={styled.demoStyle}
                container
                direction='row'
                justify="space-between"
                alignItems='center'
                spacing={2}
            >
                <Grid item xs={2}>
                    <Paper className={styled.paperStyle}>item</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={styled.paperStyle}>item</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={styled.paperStyle}>item</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default MaterialGrid
