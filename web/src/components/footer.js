/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Box = styled.footer`
	grid-area: footer;
	height: 7em;
	// background-color: #ecebeb;
`;

const EmailContainer = styled.div`
	font-family: Rock Salt;
	font-weight: 800;
	letter-spacing: 3px;
	font-size: 0.8em;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1em;

	.link {
		text-decoration: none;
		color: black;
		display: flex;
		justify-content: center;

		&:hover {
			color: #0057b8;
		}

		@media (max-width: 1024px) {
			font-size: 1em;
		}
	}

	@media only screen and (min-width: 992px) {
		font-family: Rock Salt;
		font-weight: 800;
		letter-spacing: 3px;
		font-size: 1.3em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Footer = () => (
	<Box>
		<EmailContainer>
			<Link
				sx={{
					color: 'text',
				}}
				className="link"
				href="mailto:mikeroseillustrations@email.com"
				target="_top"
			>
				mikeroseillustrations@gmail.com
			</Link>
		</EmailContainer>
	</Box>
);

export default Footer;
