/**
 * Hook to provide the site meta data.
 * Provides title, description and siteUrl, instagram
 */
export function useSiteMetadata() {
	const { site } = useStaticQuery(
		graphql`
			query SITE_METADATA_QUERY {
				site {
					siteMetadata {
						title
						description
						siteUrl
						instagram
					}
				}
			}
		`
	);
	return site.siteMetadata;
}
