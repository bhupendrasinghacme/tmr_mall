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
import BrandSections from '../components/brandstore/brandss';
import TrendingProductsHome from '../components/trending-products/trending-products-home';
import AdBanner from "../components/ad-banner/ad-banner";
import TextWithLink from "../components/textWithLink/textwithLink";
import { Box } from 'theme-ui';

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
						brand_store_heading
						brand_store{
							image_link {
								... on PRISMIC__ExternalLink {
									url
								}
						 }
						 image
					 }
					 logo_group{
						image_link {
							... on PRISMIC__ExternalLink {
								url
							}
					 }
					 image
				 }
				 slider_group {
						badge_title
						badge_color
						title
						block_image
						short_description
						add_a_button
						button_title
					}
					collage_section_title
					collage_group1 {
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
					collage_group2 {
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
					collage_section_title2
					collage_group2_1 {
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
					collage_group2_2 {
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
			const brandStoreHeading = node.brand_store_heading[0].text;
			const brandSection = node.brand_store;
			const logoSection = node.logo_group;
			const callUsBanner = node.call_us_banner;
			const callUsTitle = node.call_us_title;
			const callUsButtonText = node.call_us_button_text;
			const howItWorksTitle = node.how_it_works_title;
			const howItWorksSubtitle = node.how_it_works_subtitle;
			const howItWorksGroup = node.how_it_works_group;
			const sliderGroup = node.slider_group;
			const collageSectionTitle = node.collage_section_title[0].text;
			const collageGroup1 = node.collage_group1;
			const collageGroup2 = node.collage_group2;
			const collageSectionTitle2 = node.collage_section_title2[0].text;
			const collageGroup3 = node.collage_group2_1;
			const collageGroup4 = node.collage_group2_2;
			return (
				<PrimaryLayout>
					<SEO title="Home" />
					{/* End of home seo */}
					<AdBanner data={sliderGroup} scrollTo="#allProducts" scrollOffset={70} />

					{/* <HomeBanner
						banner={banner}
						bannerTitle={bannerTitle}
						bannerSubTitle={bannerSubTitle}
						bannerButtonText={bannerButtonText}
					/> */}

					<div className='logo-section-wrap'>
						<BrandSections brandSection={logoSection} />
					</div>
 
					<LatestProducts />

					<div className='category--wrapper'>
						<h1>{categorySectiontitle}</h1>
						<CategoryBlocks categoryBlock={categoryBlock} />
					</div> 
					<div className='category2--wrapper'>
						<h1>{categorySectiontitle2}</h1>
						<CategoryBlocks categoryBlock={categoryBlock2} />
					</div>

					{/* <FeaturedProducts /> */}
					{/* <TrendingProducts /> */}

					{/* <HowItWorks
						howItWorksTitle={howItWorksTitle}
						howItWorksSubtitle={howItWorksSubtitle}
						howItWorksGroup={howItWorksGroup}
					/> */}

					<TextWithLink />
					<LatestProducts />

					<Box className='collage-section--wrapper'>
						<h1>{collageSectionTitle}</h1>
						<Box className='collage--left-wrap'>
							<CategoryBlocks categoryBlock={collageGroup1} />
						</Box>
						<Box className='collage--right-wrap'>
							<CategoryBlocks categoryBlock={collageGroup2} />
						</Box>
					</Box>

					<div className='category3--wrapper'>
						<h1>{categorySectiontitle3}</h1>
						<CategoryBlocks categoryBlock={categoryBlock3} />
					</div>
					<div className='category4--wrapper'>
						<h1>{categorySectiontitle4}</h1>
						<CategoryBlocks categoryBlock={categoryBlock4} />
					</div>

					{/* <CallusBanner
						callUsBanner={callUsBanner}
						callUsTitle={callUsTitle}
						callUsButtonText={callUsButtonText}
					/> */}
					
					
					<Box className='collage-section2--wrapper'>
						<h1>{collageSectionTitle2}</h1>
						<Box className='collage--left-wrap'>
							<CategoryBlocks categoryBlock={collageGroup3} />
						</Box>
						<Box className='collage--right-wrap'>
							<CategoryBlocks categoryBlock={collageGroup4} />
						</Box>
					</Box>

					<div className='category5--wrapper'>
						<h1>{categorySectiontitle5}</h1>
						<CategoryBlocks categoryBlock={categoryBlock5} />
					</div>
					<div className='brand--store-wrap'>
						<h1 className='title'>{brandStoreHeading}</h1>
						<BrandSections brandSection={brandSection} />
					</div>  
				</PrimaryLayout>
			);
		}}
	/>
);

export default IndexPage;
