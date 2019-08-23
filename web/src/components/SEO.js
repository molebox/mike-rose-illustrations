import React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from './hooks/useSiteMetadata';

/**
 * An SEO component which places typical site information in the sites head
 */
export default () => {
	const { title, description } = useSiteMetadata();

	return (
		<Helmet title={title}>
			<meta name="description" content={description} />
			{title && <meta property="og:title" content={title} />}
			{description && <meta property="og:description" content={description} />}
		</Helmet>
	);
};
