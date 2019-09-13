/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Main from '../components/main';
import Sidebar from '../components/sidebar/Sidebar';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import BlogPost from '../components/blogPost';

const blog = ['B', 'L', 'O', 'G'];

const BlogPostTemplate = (props) => {
	const { data, errors } = props;
	const post = data && data.post;
	return (
		<Layout>
			<Sidebar letters={blog} />
			<Main>{post && <BlogPost {...post} />}</Main>
		</Layout>
	);
};

export default BlogPostTemplate;

export const query = graphql`
	query BlogPostTemplateQuery($id: String!) {
		post: sanityPost(id: { eq: $id }) {
			id
			publishedAt
			title
			slug {
				current
			}
			_rawBody(resolveReferences: { maxDepth: 5 })
			mainImage {
				asset {
					fluid {
						...GatsbySanityImageFluid
					}
				}
			}
			excerpt
		}
	}
`;
