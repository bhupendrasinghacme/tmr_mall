import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
import SEO from '../components/seo';
import PrimaryLayout from '../components/layout/primary/primary';
import HomeBanner from '../components/home-banner/home-banner';
import CategoryBlocks from '../components/category-blocks/primary/primary';
import LatestProducts from '../components/latest-products/latest-products-home';
import HowItWorks from '../components/how-it-works/primary/primary';
import FeaturedProducts from '../components/featured-products/featured-products-home';
import TrendingProducts from '../components/trending-products/trending-products-home';
import CallusBanner from '../components/call-us-banner/call-us-banner';
import BrandStore from '../components/brandstore/brands';


const indexPageStaticQuery = graphql`
	query {
		prismic {
			allHomes {
				edges {
					node {
						banner
						banner_button_text
						banner_subtitle
						banner_title
						category_section_title
						category_block {
							category_slug
							category_title
							product_price
							image
							imageSharp {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp_tracedSVG
									}
								}
							}
						}
						category_section_title2
						category_block2 {
							category_slug
							category_title
							product_price
							image
							imageSharp {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp_tracedSVG
									}
								}
							}
						}
						category_section_title3
						category_block3 {
							category_slug
							category_title
							product_price
							image
							imageSharp {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp_tracedSVG
									}
								}
							}
						}
						category_section_title4
						category_block4 {
							category_slug
							category_title
							product_price
							image
							imageSharp {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp_tracedSVG
									}
								}
							}
						}
						category_section_title5
						category_block5 {
							category_slug
							category_title
							product_price
							image
							imageSharp {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp_tracedSVG
									}
								}
							}
						}
						call_us_banner
						call_us_button_text
						call_us_title
						how_it_works_subtitle
						how_it_works_title
						trending_block_title
						view_more_text
						how_it_works_group {
							title
							description
							image
						}
					}
				}
			}
		}
	}
`;

const IndexPage: React.FC<{}> = () => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${indexPageStaticQuery}`}
		render={(data) => {
			const node = get(data, 'prismic.allHomes.edges[0].node');
			const banner = node.banner.url;
			const bannerTitle = node.banner_title;
			const bannerSubTitle = node.banner_subtitle;
			const bannerButtonText = node.banner_button_text;
			const categorySectiontitle = node.category_section_title[0].text;
			const categoryBlock = node.category_block;
			const categorySectiontitle2 = node.category_section_title2[0].text;
			const categoryBlock2 = node.category_block2;
			const categorySectiontitle3 = node.category_section_title3[0].text;
			const categoryBlock3 = node.category_block3;
			const categorySectiontitle4 = node.category_section_title4[0].text;
			const categoryBlock4 = node.category_block4;
			const categorySectiontitle5 = node.category_section_title5[0].text;
			const categoryBlock5 = node.category_block5;
			const callUsBanner = node.call_us_banner;
			const callUsTitle = node.call_us_title;
			const callUsButtonText = node.call_us_button_text;
			const howItWorksTitle = node.how_it_works_title;
			const howItWorksSubtitle = node.how_it_works_subtitle;
			const howItWorksGroup = node.how_it_works_group;

			return (
				<PrimaryLayout>
					<SEO title="Home" />
					{/* End of home seo */}
					<HomeBanner
						banner={banner}
						bannerTitle={bannerTitle}
						bannerSubTitle={bannerSubTitle}
						bannerButtonText={bannerButtonText}
					/>
					<LatestProducts />
					<div className='category--wrapper'>
						<h1>{categorySectiontitle}</h1>
						<CategoryBlocks categoryBlock={categoryBlock} />
					</div>
					<div className='category2--wrapper'>
						<h1>{categorySectiontitle2}</h1>
						<CategoryBlocks categoryBlock={categoryBlock2}/>
					</div>
					<FeaturedProducts />
					<TrendingProducts />
					
					<HowItWorks
						howItWorksTitle={howItWorksTitle}
						howItWorksSubtitle={howItWorksSubtitle}
						howItWorksGroup={howItWorksGroup}
					/>
					<LatestProducts />
					<div className='category3--wrapper'>
						<h1>{categorySectiontitle3}</h1>
						<CategoryBlocks categoryBlock={categoryBlock3}/>
					</div>
					<div className='category4--wrapper'>
						<h1>{categorySectiontitle4}</h1>
						<CategoryBlocks categoryBlock={categoryBlock4}/>
					</div>
					
					<CallusBanner
						callUsBanner={callUsBanner}
						callUsTitle={callUsTitle}
						callUsButtonText={callUsButtonText}
					/>
				<div className='category5--wrapper'>
						<h1>{categorySectiontitle5}</h1>
						<CategoryBlocks categoryBlock={categoryBlock5}/>
					</div>
					<BrandStore />
				</PrimaryLayout>
			);
		}}
	/>
);

export default IndexPage;
