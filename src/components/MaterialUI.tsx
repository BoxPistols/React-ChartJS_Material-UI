import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    btnStyle: {
        background: 'tomato',
        margin: '24px',
    },
})

const MaterialUI: React.FC = () => {
    const css = useStyles()
    return (
        <div>
            <Button className={css.btnStyle} variant='contained' color='primary'>
                Button
			</Button>
        </div>
    )
}

export default MaterialUI
