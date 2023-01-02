/** @jsx jsx */
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui';

const footerStaticQuery = graphql`
	query {
		prismic {
			allFooters {
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

 const footerMenuRight: React.FC<{ fluid?: boolean }> = ({ fluid }) => (
   <StaticQuery<GatsbyTypes.Query>
//         query={`${footerStaticQuery}`}
//         render={(data) => {
//             console.log("product data ===========>",data.prismic.allFooters.edges);
//             // return (
//             //     <div>
//             //         {
//             //             data.prismic.allFooters.edges?.map((item: any, i: any) => {
//             //                 return (
//             //                     <div key={i}>
//             //                         <h4>{item.node.menu_title[0].text}</h4>
//             //                     {item.node.menu_group.map((item2:any,index1:any)=>{
//             //                         console.log(item2);
//             //                         // return (
//             //                         //      <Link to={getTitleData(item.node.menu_group).link}>
//             //                         //         <img src={item2.menu_image_1[0].image} />
                                            
//             //                         //         {/* <p key={index1}>{item2.title[0].text}</p> */}
//             //                         //     </Link>
//             //                         // )
//             //                         })
//             //                        }
//             //                     </div>
//             //                 )
//             //             })
//             //         }
//             //     </div>
//             // )
//         }}
    />
 );

export default footerMenuRight;
