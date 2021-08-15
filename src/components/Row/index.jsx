import Tile from '../Tile'

import styles from './Row.module.css'

const Row = () => {
	return (
		<div className={styles.row}>
			<Tile black />
			<Tile />
			<Tile black />
			<Tile />
			<Tile black />
			<Tile />
			<Tile black />
			<Tile />
			<Tile black />
			<Tile />
			<Tile black />
			<Tile />
		</div>
	)
}

export default Row
