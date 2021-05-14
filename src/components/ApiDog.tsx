import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const gallStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: '100%',
		height: 'auto',
	},
}))

function Header() {
	return (
		<header className='hero is-dark is-bold'>
			<div className='hero-body'>
				<div className='container'>
					<h1 className='title'>ApiDog / Cute Dog Images</h1>
				</div>
			</div>
		</header>
	)
}

function Image(props: any) {
	const url = 'https://images.dog.ceo/breeds/shiba/shiba-8.jpg'
	return (
		<div className='card'>
			<div className='card-image'>
				<figure className='image'>
					<img src={props.src} alt='cute dog!' />
				</figure>
			</div>
		</div>
	)
}

function Loading() {
	return <p className='text-center'>Loading...</p>
}

function Gallery(props: any) {
	const { urls } = props

	if (urls == null) {
		return <Loading />
	}
	const classes = gallStyles()

	return (
		<div className={classes.root}>
			<GridList cellHeight={160} className={classes.gridList} cols={3}>
				{urls.map((url: any) => (
					<GridListTile key={url} cols={url.cols || 0.5}>
						<img src={url} alt={url} />
					</GridListTile>
				))}
			</GridList>
		</div>
	)
}

function Main() {
	const urls = [
		'https://images.dog.ceo/breeds/shiba/shiba-11.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-12.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-14.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-17.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-2.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-3i.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-4.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-5.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-6.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-7.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-8.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-9.jpg',
		'https://images.dog.ceo/breeds/shiba/shiba-10.jpg',
	]
	// const urls = null
	return (
		<main>
			<section className='section'>
				<div className='container'>
					<Gallery urls={urls} />
				</div>
			</section>
		</main>
	)
}

function Footer() {
	return (
		<footer className='footer'>
			<div className='content has-text-centered'>
				<p>Dog images are retrieved from Dog API</p>
				<p>
					<a href='https://dog.ceo/dog-api/about'>
						Donate to Dog API
					</a>
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
		padding: '24px',
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
