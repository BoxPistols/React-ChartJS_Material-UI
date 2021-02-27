import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles({
    demoStyle: {
        margin: '24px auto',
        maxWidth: '960px',
        minHeight: '48px',
        background: '#f9f9f9',
    },
    paperStyle: {
        background: 'teal',
        height: '50px',
        textAlign: 'center',
    },
})

const MaterialGrid: React.FC = () => {
    const styled = useStyles()
    return (
        <div>
            {/* Flex */}
            <Grid
                className={styled.demoStyle}
                container
                direction='row'
                justify='space-between'
                alignItems='center'
                spacing={2}
            >
                <Grid item xs={2}>
                    <Paper className={styled.paperStyle}>item</Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={styled.paperStyle}>item</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={styled.paperStyle}>item</Paper>
                </Grid>
            </Grid>

            {/* Nest */}
            <Grid
                className={styled.demoStyle}
                container
                direction='column'
                spacing={2}
            >
                <Grid item xs={12} spacing={1} container>
                    <Grid item xs={2}>
                        <Paper className={styled.paperStyle}>item</Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={styled.paperStyle}>item</Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={styled.paperStyle}>item</Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MaterialGrid
