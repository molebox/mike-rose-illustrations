/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from './../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';

const shop = ['S', 'H', 'O', 'P'];

const Container = styled.main`
	// display: grid;
	// grid-template-rows: 1fr 2fr;'
	display: flex;
	flex-direction: column;
	// height: 100vh;
	// margin-top: 2em;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	margin: 0 2em 5em 2em;
`;

const Column = styled.div`
	diaplay: flex;
	flex-direction: column;
	flex-basis: 100%;

	display: flex;
	justify-content: center;
	// align-items: center;

	@media (min-width: 800px) {
		flex: 1;
	}
`;

const PictureBox = styled.div`
	height: 300px;
	// margin: 1em;
	display: flex;
	justify-content: center;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;

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

const Image = styled(Img)`
	display: flex;
	width: 25em;
	height: 20em;
	margin: 0 4em 0 0;
	border-radius: 0.4em;
	box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);

	@media (max-width: 920px) {
		width: 10em;
		height: 10em;
		border-radius: 0.4em;
		box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);
	}

	@media (max-width: 1024px) {
		width: 15em;
		height: 15em;
		border-radius: 0.4em;
		box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);
	}
`;

const ProductBox = styled.div`
	//   height: 300px;
	//   margin: 1em;
	//   font-size: 1em;
	width: 70%;
	display: flex;
	justify-content: flex-start;
`;

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: center;

	-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 700ms both;
	animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 700ms both;

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

const Shop = () => {
	const [sanitySKU, setSanitySKU] = React.useState([]);
	const products = useStaticQuery(query);
	const stripe = products.allStripeSku.edges;
	const sanity = products.allSanityProduct.edges;

	React.useEffect(() => {
		console.log('SANITY: ', _.flattenDeep(sanity));
		console.log('STRIPE: ', _.flattenDeep(stripe));
		// finds the matching products from both sanity and stripe and matches them on the products sku
		setSanitySKU(
			_.flattenDeep(sanity).filter((node) => _.flattenDeep(stripe).find((sku) => node.defaultProductVariant === sku.id))
		);
		console.log(
			'SKU: ',
			_.flattenDeep(sanity).filter((node) => _.flattenDeep(stripe).find((sku) => node.defaultProductVariant === sku.id))
		);
	}, [sanity, stripe]);

	return (
		<Layout>
			<Sidebar letters={shop} />
			<Main>
				<Container>
					{sanitySKU.map(({ node }) => (
						<Row>
							<Column>
								<PictureBox>
									<ImageContainer>
										<Image fluid={node.defaultProductVariant.images.asset.fluid} />
									</ImageContainer>
								</PictureBox>
							</Column>
							<Column>
								<ProductBox>
									<DescriptionContainer>
										<h4
											sx={{
												color: 'text',
												fontFamily: 'heading',
												fontWeight: 'heading',
												fontSize: '1rem',
												lineHeight: 'body',
												letterSpacing: 'body',
											}}
										>
											{node.defaultProductVariant.title}
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
											{node.blurb}
										</h3>
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
											{node.body}
										</h3>
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
											£{node.defaultProductVariant.price}
										</h3>
									</DescriptionContainer>
								</ProductBox>
							</Column>
						</Row>
					))}
				</Container>
			</Main>
		</Layout>
	);
};

export default Shop;

export const query = graphql`
	query Products {
		allStripeSku {
			edges {
				node {
					price
					id
				}
			}
		}
		allSanityProduct {
			edges {
				node {
					defaultProductVariant {
						price
						sku
						title
						images {
							asset {
								fluid {
									src
								}
							}
						}
					}
					vendor {
						title
					}
					categories {
						title
					}
					blurb
					body
				}
			}
		}
	}
`;
