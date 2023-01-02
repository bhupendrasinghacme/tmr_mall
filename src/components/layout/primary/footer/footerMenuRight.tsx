/** @jsx jsx */
import SocialLinks from '../../../social-links/social-links';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui';


const footerStaticQuery = graphql`
	query {
		prismic {
			allFooter_2s {
				edges {
					node {
                        menu_title
                        menu_group {
                            menu_image1_link{
                                    ... on PRISMIC__ExternalLink {
									url
								    }
                                }
                                menu_image_1
                            }
					}
				}
			}
            	allCommons {
				edges {
					node {
						social_links {
							social_link {
								... on PRISMIC__ExternalLink {
									url
								}
							}
							social_type
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
        data.push({ type: link.menu_image_1, link: link.menu_image1_link.url });
    });
    return data;
};

const getSocialData = (links) => {
    const data = [];
    links.forEach((link) => {
        data.push({ type: link.social_type, link: link.social_link.url });
    });
    return data;
};

const footerMenuRight: React.FC<{ fluid?: boolean }> = ({ fluid }) => (

    <StaticQuery<GatsbyTypes.Query>
        query={`${footerStaticQuery}`}
        render={(data) => {
            console.log("data>><<<<<", data.prismic.allCommons.edges?.map((item: any) => item.node));
            // const footerData = get(data, 'prismic.allCommons.edges[0].node');
            const socialData = getSocialData(data.prismic.allCommons.edges?.map((item: any) => item.node)[0].social_links);
            return (

                <div>
                    {
                        data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                            // console.log("data==>>", data)
                            return (

                                <div key={i}>
                                    <h4 className="menu__title">{item.node.menu_title[0].text}</h4>
                                    {item.node.menu_group.map((item2: any, index1: any) => {
                                        console.log("item2>>", item2, "index111", index1);
                                        return (
                                            <Link to={getTitleData(item.node.menu_group).link}>
                                                <img className="footer_image" key={index1} src={item2.menu_image_1.url} />
                                            </Link>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                    }
                    <SocialLinks items={socialData} />
                </div >
            )
        }}
    />
);


export default footerMenuRight;
