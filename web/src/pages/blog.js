/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const blog = ['B', 'L', 'O', 'G'];

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

const Container = styled.main`
	max-width: 1100px;
	margin: auto;
	overflow: auto;
	padding: 0 2rem;
`;

const Card = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	background: #f1f1f1;
	margin-bottom: 2rem;
	padding: 2rem;
	cursor: pointer;
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

	&:nth-child(even) .img {
		order: 2;
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

const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	& > div > h4 {
		@media (max-width: 700px) {
			font-size: 1.5rem;
		}
	}

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

const Blog = () => {
	const blogPosts = useStaticQuery(query);
	const posts = blogPosts.allSanityPost.edges;
	return (
		<Layout>
			<Sidebar letters={blog} />
			<Main>
				<Header>
					<h1>Mikes Blog</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>
				</Header>
				<Container>
					{posts.map(({ node }) => (
						<Link
							to={`/${node.slug}`}
							sx={{
								color: 'text',
								textDecoration: 'none',
								fontFamily: 'heading',
								letterSpacing: 'text',
							}}
						>
							<Card>
								<Image className="img" fluid={node.mainImage.asset.fluid} alt={node.title} />
								<Description>
									<div>
										<h4
											sx={{
												color: 'text',
												fontFamily: 'heading',
												fontWeight: 'heading',
												fontSize: [5],
												lineHeight: 'body',
												letterSpacing: 'body',
												borderBottom: 'solid 0.1em',
												borderColor: 'text',
												padding: '0.5em',
											}}
										>
											{node.title}
										</h4>
										<h3
											sx={{
												color: 'text',
												fontFamily: 'body',
												fontWeight: 'body',
												fontSize: '.9rem',
												lineHeight: 'body',
												letterSpacing: 'body',
											}}
										>
											{node.excerpt}
										</h3>
									</div>
								</Description>
							</Card>
						</Link>
					))}
				</Container>
			</Main>
		</Layout>
	);
};

export default Blog;

export const query = graphql`
	query blogPosts {
		allSanityPost {
			edges {
				node {
					title
					publishedAt
					mainImage {
						asset {
							fluid {
								...GatsbySanityImageFluid
							}
						}
					}
					excerpt
					slug {
						current
					}
				}
			}
		}
	}
`;
