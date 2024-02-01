import styles from './header.module.css'
import {NavLink} from 'react-router-dom'

export const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to='/'>Все котики</NavLink>
            <NavLink to='/favourite'>Любимые котики</NavLink>
        </div>
    )
}