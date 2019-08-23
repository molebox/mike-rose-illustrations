/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.5fr 1fr 1fr;
	grid-template-areas:
		'title'
		'links'
		'email';
	grid-area: sidebar;

	border-right: solid 3px black;
	height: 110vh;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
`;

const TitleConatiner = styled.div`
	grid-area: title;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 3em;
	font-family: Rock Salt;
`;

const Links = styled.div`
	grid-area: links;

	font-family: Rock Salt;
	letter-spacing: 3px;
	font-size: 2em;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	.link {
		text-decoration: none;
		color: black;
		display: flex;
		justify-content: center;

		&:hover {
			color: #0057b8;
		}
	}
`;

const EmailContainer = styled.div`
	grid-area: email;

	font-family: Rock Salt;
	font-weight: 800;
	letter-spacing: 3px;
	font-size: 1.3em;
	display: flex;
	justify-content: center;
	align-items: center;

	.link {
		text-decoration: none;
		color: black;
		display: flex;
		justify-content: center;

		&:hover {
			color: #0057b8;
		}
	}
`;

const Sidebar = () => {
	return (
		<Container>
			<TitleConatiner>
				<Title>mike rose illustrations</Title>
			</TitleConatiner>
			<Links>
				<Link className="link" to="/">
					About Mike
				</Link>

				<Link className="link" to="/gallery">
					Artwork
				</Link>

				<Link className="link" to="/customWork">
					Custom work
				</Link>

				<Link className="link" to="/shop">
					Shop
				</Link>

				<Link className="link" to="/blog">
					Blog
				</Link>

				<Link className="link" to="/instagram">
					Instagram
				</Link>
			</Links>
			<EmailContainer>
				<Link className="link" href="mailto:mikeroseillustrations@email.com" target="_top">
					mikeroseillustrations@gmail.com
				</Link>
			</EmailContainer>
		</Container>
	);
};

export default Sidebar;
