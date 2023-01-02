/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
import { RichText } from 'prismic-reactjs';
import { Box, Text, jsx } from 'theme-ui';
import Container from '../../../container/container';
import SocialLinks from '../../../social-links/social-links';
import styles from './footer.styles';

const footerStaticQuery = graphql`
	query {
		prismic {
			allFooters {
				edges {
					node {
                         menu_heading 
                            footer_menu {
                                title_link{
                                    ... on PRISMIC__ExternalLink {
									url
								    }
                                }
                                title
                            }
					}
				}
			}
		}
	}
`;

const getTitleData = (links) => {
    const data = [];
    links.forEach((link) => {
        data.push({ type: link.title, link: link.title_link.url });
    });
    return data;
};

const FooterMenu: React.FC<{ fluid?: boolean }> = ({ fluid }) => (
    <StaticQuery<GatsbyTypes.Query>
        query={`${footerStaticQuery}`}
        render={(data) => {
            // data.prismic.allFooters.edges?.map((item: any, i: any) => {
            //     console.log("data product=====>", item.node.footer_menu)
            // })
            return (
                // const footerData = get(data, 'prismic.allFooters.edges[0].node');
                <div>
                    {
                        data.prismic.allFooters.edges?.map((item: any, i: any) => {
                            return (
                                <div key={i}>
                                    <h1>{item.node.menu_heading[0].text}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            )

            // const socialData = getTitleData(footerData.footer_menu);
            // return (
            //     <h1>{footerData.menu_heading[0].text}</h1>
            // <Box as="footer" sx={styles.footer}>
            //     <Container fluid={fluid}>
            //         <Text className="copyright" sx={styles.copyright}>
            //             {RichText.render(footerData.copyright_text)}
            //         </Text>
            //         <SocialLinks items={socialData} />
            //     </Container>
            // </Box>
            // );
        }}
    />
);

export default FooterMenu;
