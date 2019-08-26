import React from 'react';
import Layout from '../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';

const blog = ['B', 'L', 'O', 'G'];

const Blog = () => (
	<Layout>
		<Sidebar letters={blog} />
		<Main>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1>This is the blog page</h1>
			</div>
		</Main>
	</Layout>
);

export default Blog;
