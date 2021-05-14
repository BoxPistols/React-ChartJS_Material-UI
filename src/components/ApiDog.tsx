import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'

export const useStyles = makeStyles({
    demoStyle: {
        margin: '24px auto',
        maxWidth: '960px',
        minHeight: '48px',
        background: '#f9f9f9',
    },
    paperStyle: {
        minHeight: '80px',
        textAlign: 'center',
        padding: '24px'
    },
})

const ApiDog: React.FC = () => {
    const styled = useStyles()

    return (
        <div>
            <Grid
                className={styled.demoStyle}
                container
                direction='row'
                justify='space-between'
                alignItems='center'
                spacing={2}
            >
                <Grid item xs={12}>
                    <Paper className={styled.paperStyle}>ApiDog</Paper>
                </Grid>

            </Grid>
        </div>
    )
}
export default ApiDog
