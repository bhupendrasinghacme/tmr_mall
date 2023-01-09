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
                footer_menu1_title
                footer_menu1_group{
                    link {
                        ... on PRISMIC__ExternalLink {
                            url
                        }
                    }
                    title
                }
                footer_menu2_title
                footer_menu2_group{
                    link {
                        ... on PRISMIC__ExternalLink {
                            url
                        }
                    }
                    title
                }
                menu_title
                menu_group {
                    menu_image1_link{
                            ... on PRISMIC__ExternalLink {
                            url
                            }
                        }
                        menu_image_1
                    }
                    footer_2_bottom_title
                    footer_2_group2{
                        link {
                            ... on PRISMIC__ExternalLink {
                                url
                            }
                        }
                         title
                }
                footer_2_bottom_title1
                footer_2_group_3{
                    link {
                        ... on PRISMIC__ExternalLink {
                            url
                        }
                    }
                    title
            }
            footer_2_bottom_title2
            footer_2_group_4{
                link {
                    ... on PRISMIC__ExternalLink {
                        url
                    }
                }
                title
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
const getTitleData = (links: any) => {
    const data: any = [];
    links.forEach((link: any) => {
        data.push({ type: link.menu_image_1, link: link.menu_image1_link.url });
    });
    return data;
};

const getSocialData = (links: any) => {
    const data: any = [];
    links.forEach((link: any) => {
        data.push({ type: link.social_type, link: link.social_link.url });
    });
    return data;
};

const FooterMenu: React.FC<{ fluid?: boolean }> = ({ fluid }) => (
    <StaticQuery<GatsbyTypes.Query>
        query={`${footerStaticQuery}`}
        render={(data) => {
            const socialData = getSocialData(data.prismic.allCommons.edges?.map((item: any) => item.node)[0].social_links);
            return (
                <Box className='footer-block--menu-wrap'>
                    <Box className='footer-menu1-wrapper'>
                        {
                            data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                                return (
                                    <Box key={"footer_menu_" + i} className='footer__bottom-menu'>
                                        <h4 className="menu__title">{item.node.footer_menu1_title[0].text}</h4>
                                        {
                                            item.node.footer_menu1_group.map((item3: any, index1: any) => {
                                                return (
                                                    <Link key={"links_l_" + index1} to={item3.link.url}>
                                                        <Text>{item3.title[0].text}</Text>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Box>
                                )
                            })
                        }

                        {
                            data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                                return (
                                    <Box key={"key_menu_" + i} className='footer__bottom-menu'>
                                        <h4 className="menu__title">{item.node.footer_menu2_title[0].text}</h4>
                                        {
                                            item.node.footer_menu2_group.map((item3: any, index1: any) => {
                                                return (
                                                    <Link key={'links_2_' + index1} to={item3.link.url}>
                                                        <Text>{item3.title[0].text}</Text>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Box>
                                )
                            })
                        }

                        {
                            data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                                return (
                                    <Box key={i} className='footer__bottom-menu'>
                                        <h4 className="menu__title">{item.node.menu_title[0].text}</h4>
                                        <Box className='images_wrap'>
                                            {item.node.menu_group.map((item2: any, index1: any) => {
                                                return (
                                                    <Link key={"links_4_" + index1} to={getTitleData(item.node.menu_group)[index1].link}>
                                                        <img className="footer_image" key={index1} src={item2.menu_image_1.url} />
                                                    </Link>
                                                )
                                            })
                                            }
                                        </Box>
                                    </Box>
                                )
                            })
                        }

                        <Box className="socialmenu footer__bottom-menu">
                            <Box className='share--link'>Share links</Box>
                            <SocialLinks items={socialData} />
                        </Box>
                    </Box>

                    <Box className='footer-menu2-wrapper'>
                        {
                            data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                                return (
                                    <Box key={i} className='footer__bottom-menu'>
                                        <h4 className="menu__title">{item.node.footer_2_bottom_title[0].text}</h4>
                                        {
                                            item.node.footer_2_group2.map((item3: any, index1: any) => {
                                                return (

                                                    <Link key={"links_5_" + index1} to={item3.link.url != undefined ? item3.link.url : ''}>
                                                        <p>{item3.title[0].text}</p>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Box>
                                )
                            })
                        }
                        {
                            data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                                return (

                                    <Box key={i} className='footer__bottom-menu'>
                                        <h4 className="menu__title">{item.node.footer_2_bottom_title1[0].text}</h4>
                                        {
                                            item.node.footer_2_group_3.map((item3: any, index1: any) => {
                                                return (

                                                    <Link key={"links_2_" + index1} to={item3.link.url != undefined ? item3.link.url : ''}>
                                                        <p>{item3.title[0].text}</p>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Box>
                                )
                            })
                        }
                        {
                            data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                                return (
                                    <Box key={i} className='footer__bottom-menu'>
                                        <h4 className="menu__title">{item.node.footer_2_bottom_title2[0].text}</h4>
                                        {
                                            item.node.footer_2_group_4.map((item3: any, index1: any) => {
                                                return (
                                                    <Link key={"links_3_" + index1} to={item3.link.url != undefined ? item3.link.url : ''}>
                                                        <p>{item3.title[0].text}</p>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>

            )

        }}
    />
);


export default FooterMenu;
