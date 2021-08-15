import Tile from '../Tile'

import styles from './Row.module.css'

const Row = (props) => {
	return (
		<div className={styles.row}>
			<Tile black={props.black} />
			<Tile black={!props.black} />

			<Tile black={props.black} />
			<Tile black={!props.black} />

			<Tile black={props.black} />
			<Tile black={!props.black} />

			<Tile black={props.black} />
			<Tile black={!props.black} />
		</div>
	)
}

export default Row
