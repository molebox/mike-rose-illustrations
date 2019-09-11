/** @jsx jsx */
import { jsx } from 'theme-ui';
import { slide as Menu } from 'react-burger-menu';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ColorToggle } from './colorModeToggle';

const Styles = styled.div`
	.bm-item {
		font-family: Rock Salt;
		letter-spacing: 3px;
		text-align: center;
		display: inline-block;
		text-decoration: none;
		margin-bottom: 5vh;
		color: #d1d1d1;
		transition: color 0.2s;
		outline: 0;
		font-size: 1rem;
	}

	.bm-item:focus,
	.bm-burger-button:focus,
	.bm-burger-bars:focus,
	.bm-cross-button:focus,
	.bm-cross:focus {
		outline: 0;
		border: 0;
	}

	.bm-item:active,
	.bm-burger-button:active,
	.bm-burger-bars:active,
	.bm-cross-button:active,
	.bm-cross:active {
		outline: 0;
		border: 0;
	}

	.bm-item:hover {
		color: #0057b8;
	}
	.bm-burger-button {
		position: fixed;
		width: 30px;
		height: 20px;
		right: 2vw;
		top: 2vh;
		outline: 0;
	}

	.bm-burger-bars {
		background: #0057b8;
		outline: 0;
	}
	.bm-cross-button {
		height: 30px;
		width: 15px;
		outline: 0;
	}
	.bm-cross {
		background: #bdc3c7;
		outline: 0;
	}
	.bm-menu {
		background: rgba(0, 0, 0, 1.3);
		padding: 3.5em 2.5em 0;
		font-size: 2em;
	}
	.bm-morph-shape {
		fill: #1c1c1c;
	}
	.bm-item-list {
		color: #b8b7ad;
	}

	.bm-overlay {
		background: rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 768px) {
		font-size: 0.5em;

		.bm-burger-button {
			width: 20px;
			height: 10px;
			right: 5vw;
			top: 3vh;
		}
	}
`;

const Toggle = styled.div`
	display: flex;
	justify-content: center;
`;

export default (props) => {
	return (
		<Styles>
			<Menu {...props} right>
				<Toggle>
					<ColorToggle />
				</Toggle>
				<Link
					sx={{
						color: 'text',
					}}
					className="link"
					to="/"
				>
					About Mike
				</Link>

				<Link
					sx={{
						color: 'text',
					}}
					className="link"
					to="/customWork"
				>
					Custom work
				</Link>

				<Link
					sx={{
						color: 'text',
					}}
					className="link"
					to="/shop"
				>
					Shop
				</Link>

				<Link
					sx={{
						color: 'text',
					}}
					className="link"
					to="/blog"
				>
					Blog
				</Link>

				<Link
					sx={{
						color: 'text',
					}}
					className="link"
					to="/instagram"
				>
					Instagram
				</Link>

				{/* <Link
					sx={{
						color: 'background',
						fontSize: '1rem'
					}}
					className="link"
					href="mailto:mikeroseillustrations@email.com"
					target="_top"
				>
				mikeroseillustrations@gmail.com
			</Link> */}
			</Menu>
		</Styles>
	);
};
