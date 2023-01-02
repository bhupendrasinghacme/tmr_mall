/** @jsx jsx */
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui';

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
            return (
                <div>
                    {
                        data.prismic.allFooters.edges?.map((item: any, i: any) => {
                            return (
                                <div key={i}>
                                    <h4>{item.node.menu_heading[0].text}</h4>
                                    {item.node.footer_menu.map((item2: any, index1: any) => {
                                        let link_url = getTitleData(item.node.footer_menu);
                                        return (
                                            <Link to={link_url[0].link}>
                                                <p key={index1}>{item2.title[0].text}</p>
                                            </Link>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )
        }}
    />
);

export default FooterMenu;
