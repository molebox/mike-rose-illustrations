/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';

const blog = ['B', 'L', 'O', 'G'];

const Blog = () => (
	<Layout>
		<Sidebar letters={blog} />
		<Main>
			<h1>This is the blog page</h1>
		</Main>
	</Layout>
);

export default Blog;
