import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'

function Header() {
    return (
        <header className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Cute Dog Images</h1>
                </div>
            </div>
        </header>
    )
}

function Image() {
    const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg"

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={url} alt="cute dog!" />
                </figure>
            </div>
        </div>
    )
}

function Gallery() {
    return (
        <div className="columns is-vcentered is-multiline">
            <div className="column is-3">
                <Image />
            </div>
        </div>
    )
}

function Main() {
    return (
        <main>
            <section className="section">
                <div className="container">
                    <Gallery />
                </div>
            </section>
        </main>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>Dog images are retrieved from Dog API</p>
                <p>
                    <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
                </p>
            </div>
        </footer>
    )
}

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
                    <Paper className={styled.paperStyle}>
                        <h1>ApiDog</h1>
                        <Header />
                        <Main />
                        <Footer />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}
export default ApiDog
