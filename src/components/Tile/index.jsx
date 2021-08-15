import styles from './Tile.module.css'

const Tile = (props) => {
	return (
		<div
			className={styles.tile}
			style={{
				backgroundColor: props.black ? '#000' : '#fff'
			}}
		/>
	)
}

export default Tile
