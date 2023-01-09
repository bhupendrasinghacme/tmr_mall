/** @jsx jsx */
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui'

const twlStaticQuery = graphql`
query {
    prismic {
        allHomes {
            edges {
                node {
                    top_offers_title
                    top_offers_group{
                        heading
                        sub_heading
                        text_link {
                            ... on PRISMIC__ExternalLink {
                                url
                            }
                     }
                     view_offers_text
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
    data.push({ type: link.view_offers_text, link: link.text_link.url });
    });
    return data;
    };
    

const TextWithLink = () => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${twlStaticQuery}`}
		render={(data: any) => {
            return(
                <div className='textwithLink-wrapper'>
                        {
                            data.prismic.allHomes.edges?.map((item: any, i: any) => {
                                return (
                                    <div key={i} className='textwithLink-group'>
                                        <h1 className="title">{item.node.top_offers_title[0].text}</h1>
                                       <div className='twl-item-wrap'>
                                          {item.node.top_offers_group.map((item2: any, index1: any) => {
                                                console.log("item2>>new dattwl>>", item2, "index111", index1);
                                                return (
                                                    <div>
                                                       <div className='heading'>{item2.heading[0].text}</div>
                                                        <div className='sub_heading'>{item2.sub_heading[0].text}</div>
                                                        <Link to={getTitleData(item.node.top_offers_group).link}>
                                                            <div>{item2.view_offers_text[0].text}</div>
                                                        </Link>
                                                   </div>
                                                  
                                                  )
                                                
                                                })
                                            }
                                          
                                        </div>
                                    </div>
                                )
                            })
                        }
               </div>
            )
         
		}}
	/>
);

export default TextWithLink;
