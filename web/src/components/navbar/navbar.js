/** @jsx jsx */
import { jsx, css } from 'theme-ui';
import styles from './navbar.module.css';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Link } from 'gatsby';

const Navbar = () => {
	const { title } = useSiteMetadata();
	return (
		<header className={styles.header}>
			<a href="" className={styles.logo}>
				<Link
					sx={{
						color: 'text',
						textDecoration: 'none',
						fontFamily: 'heading',
						letterSpacing: 'text',
					}}
					to="/"
				>
					{title}
				</Link>
			</a>
			<input className={styles.menu_btn} type="checkbox" id="menu-btn" />
			<label className={styles.menu_icon} for="menu-btn">
				<span className={styles.navicon}></span>
			</label>
			<ul className={styles.menu}>
				<li>
					<Link
						sx={{
							color: 'text',
							textDecoration: 'none',
							fontFamily: 'body',
							fontSize: [2],
							fontWeight: 'bold',
						}}
						to="/shop"
					>
						Shop
					</Link>
				</li>
				<li>
					<Link
						sx={{
							color: 'text',
							textDecoration: 'none',
							fontFamily: 'body',
							fontSize: [2],
							fontWeight: 'bold',
						}}
						to="/blog"
					>
						Blog
					</Link>
				</li>
				<li>
					<Link
						sx={{
							color: 'text',
							textDecoration: 'none',
							fontFamily: 'body',
							fontSize: [2],
							fontWeight: 'bold',
						}}
						to="/instagram"
					>
						Instagram
					</Link>
				</li>
				<li>
					<Link
						sx={{
							color: 'text',
							textDecoration: 'none',
							fontFamily: 'body',
							fontSize: [2],
							fontWeight: 'bold',
						}}
						to="/"
					>
						Contact
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
