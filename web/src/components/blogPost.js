/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import BlockContent from '@sanity/block-content-to-react';

// check https://github.com/sanity-io/sanity-template-gatsby-blog/blob/master/template/web/src/components/blog-post.js

const Container = styled.main`
	max-width: 1100px;
	margin: auto;
	overflow: auto;
	padding: 0 2rem;
`;

const Header = styled.header`
	height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 2rem;

	-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	& > h1 {
		font-family: Nanum Pen Script;
		font-weight: 300;
		letter-spacing: 3px;
		font-size: 4rem;
		margin-bottom: 2rem;
		line-height: 1.2;

		@media (max-width: 700px) {
			font-size: 2rem;
		}
	}

	& > p {
		fonst-size: 2rem;
		font-family: Open Sans;
	}
`;

const Card = styled.div`
	background: #f1f1f1;
	padding: 2rem;
	margin-bottom: 2rem;
	-webkit-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
	box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
	border-radius: 0.4em;

	& > div {
		padding: 1rem;
	}

	& h4 {
		margin-bottom: 2rem;
	}

	@media (max-width: 700px) {
		display: block;
	}
`;

const Image = styled(Img)`
	width: 100%;
	border-radius: 0.4em;
	border: 1px solid black;
	-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const serializers = {
	hardBreak: <br />,
};

const BlogPost = (props) => {
	const { _rawBody, title, excerpt, mainImage, publishedAt } = props;

	return (
		<Container>
			<Header>
				<h1
					sx={{
						color: 'text',
						fontFamily: 'heading',
						fontWeight: 'heading',
						fontSize: [5],
						lineHeight: 'body',
						letterSpacing: 'body',
						borderBottom: 'solid 3px',
						borderColor: 'text',
					}}
				>
					{title}
				</h1>
				<Image fluid={mainImage.asset.fluid} alt={title} />
			</Header>
			<Card>
				<BlockContent blocks={_rawBody} serializers={serializers} />
			</Card>
		</Container>
	);
};

export default BlogPost;
