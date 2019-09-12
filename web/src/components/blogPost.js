/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import BasePortableText from '@sanity/block-content-to-react'

// check https://github.com/sanity-io/sanity-template-gatsby-blog/blob/master/template/web/src/components/blog-post.js

const Card = styled.div`
	background: #f1f1f1;
	padding: 2rem;
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

const BlogPost = () => {
    const {_rawBody, title, mainImage, publishedAt} = props

    return (
        <Card>
            <h1>{title}</h1>
        </Card>
    );
}

export default BlogPost;