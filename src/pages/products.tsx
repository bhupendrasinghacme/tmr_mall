import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ProductGrid from './../components/product-grid/product-grid';

const AllProductStaticQuery = graphql`
	query {
		allShopifyProduct {
			edges {
				node {
					id
					title
					handle
					createdAt
					shopifyId
					availableForSale
					variants {
						id
						price
						priceV2 {
							amount
							currencyCode
						}
						shopifyId
						availableForSale
					}
					images {
						id
						originalSrc
						localFile {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid_withWebp_tracedSVG
								}
							}
						}
					}
				}
			}
		}
	}
`;

const ProductsPage: React.FC<{ withLink?: boolean }> = ({
    withLink = true,
}) => (
    <StaticQuery<GatsbyTypes.Query>
        query={`${AllProductStaticQuery}`}
        render={({ allShopifyProduct }) => {
            const products = allShopifyProduct?.edges;
            return (
                <ProductGrid
                    id="feature"
                    withLink={withLink}
                    gridTitle="All Products"
                    products={products}
                />
            );
        }}
    />
);

export default ProductsPage;