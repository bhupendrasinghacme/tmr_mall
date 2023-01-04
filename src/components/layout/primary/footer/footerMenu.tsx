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

const FooterMenu: React.FC<{ fluid?: boolean }> = ({ fluid }) => (

<StaticQuery<GatsbyTypes.Query>
query={`${footerStaticQuery}`}
render={(data) => {
    console.log("data>><<<<<", data.prismic);
    console.log("data>><<<<<dataas", data.prismic.allFooter_2s.edges[0]?.node.footer_2_group2[0].title[0].text);
    // const footerData = get(data, 'prismic.allCommons.edges[0].node');
    const socialData = getSocialData(data.prismic.allCommons.edges?.map((item: any) => item.node)[0].social_links);
    return (

        <div className='footer-block--menu-wrap'>
            <div className='footer-menu1-wrapper'>
                {
                    data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                    console.log("data==>>soumyadav",item)
                    return (
                        <div key={i} className='footer__bottom-menu'>
                            <h4 className="menu__title">{item.node.footer_menu1_title[0].text}</h4>
                            {
                            item.node.footer_menu1_group.map((item3: any, index1: any) =>{
                                console.log("fotter22>>item3",item3, "index2", index1)
                                return(
                                    <Link to={item3.link.url}>
                                        <p>{item3.title[0].text}</p>
                                    </Link>
                                )
                            })
                            }
                        </div>
                    )
                })
            }   
            
            {
                    data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                    console.log("data==>>soumyadav",item)
                    return (
                        <div key={i} className='footer__bottom-menu'>
                            <h4 className="menu__title">{item.node.footer_menu2_title[0].text}</h4>
                            {
                            item.node.footer_menu2_group.map((item3: any, index1: any) =>{
                                console.log("fotter22>>item3",item3, "index2", index1)
                                return(
                                    <Link to={item3.link.url}>
                                        <p>{item3.title[0].text}</p>
                                    </Link>
                                )
                            })
                            }
                        </div>
                    )
                })
            }   

            {
                data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                    //console.log("data==>>soumys", data)
                    return (

                        <div key={i} className='footer__bottom-menu'>
                            <h4 className="menu__title">{item.node.menu_title[0].text}</h4>
                            <div className='images_wrap'>
                            {item.node.menu_group.map((item2: any, index1: any) => {
                                //console.log("item2>>new dat", item2, "index111", index1);
                                return (
                                
                                    <Link to={getTitleData(item.node.menu_group).link}>
                                        <img className="footer_image" key={index1} src={item2.menu_image_1.url} />
                                    </Link>
                              
                                )
                            })
                            }
                              </div>
                        </div>
                    )
                })
            }
         
            <div className="socialmenu footer__bottom-menu">
            <div className='share--link'>Share links</div>
            <SocialLinks className='list-social__item' items={socialData} />
            </div>
        </div>
           
        <div className='footer-menu2-wrapper'>
            {
                data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                console.log("data==>>soumyadav",item)
                return (

                    <div key={i} className='footer__bottom-menu'>
                        <h4 className="menu__title">{item.node.footer_2_bottom_title[0].text}</h4>
                        {
                           item.node.footer_2_group2.map((item3: any, index1: any) =>{
                            console.log("fotter22>>item3",item3, "index2", index1)
                            return(
                                
                                <Link to={item3.link.url}>
                                    <p>{item3.title[0].text}</p>
                            </Link>
                            )
                        })
                        }
                    </div>
                )
            })
         }   
        {
                data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                console.log("data==>>soumyadav",item)
                return (

                    <div key={i} className='footer__bottom-menu'>
                        <h4 className="menu__title">{item.node.footer_2_bottom_title1[0].text}</h4>
                        {
                           item.node.footer_2_group_3.map((item3: any, index1: any) =>{
                            console.log("fotter22>>item3",item3, "index2", index1)
                            return(
                                
                                <Link to={item3.link.url}>
                                    <p>{item3.title[0].text}</p>
                            </Link>
                            )
                        })
                        }
                    </div>
                )
            })
         }   

            {
                data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                console.log("data==>>soumyadav",item)
                return (
                    <div key={i} className='footer__bottom-menu'>
                        <h4 className="menu__title">{item.node.footer_2_bottom_title2[0].text}</h4>
                        {
                           item.node.footer_2_group_4.map((item3: any, index1: any) =>{
                            console.log("fotter22>>item3",item3, "index2", index1)
                            return(
                                
                                <Link to={item3.link.url}>
                                    <p>{item3.title[0].text}</p>
                            </Link>
                            )
                        })
                        }
                    </div>
                )
            })
         }   
        </div >
   </div>

)

}}
/>
);


export default FooterMenu;
