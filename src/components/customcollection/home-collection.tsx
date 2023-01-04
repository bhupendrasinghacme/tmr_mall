/** @jsx jsx */
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui';
import styles from "./homecollection.style";

const collectionStaticQuery = graphql`
query {
    prismic {
        allHomes {
            edges {
                node {
                    collection_heading
                    home_collection_group{
                        collection_link {
                            ... on PRISMIC__ExternalLink {
                                url
                            }
                     }
                     collection_image
                     collection_name
                     discount_price
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
    data.push({ type: link.collection_image, link: link.collection_link.url });
    });
    return data;
    };
    

const HomeCollection = () => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${collectionStaticQuery}`}
		render={(data: any) => {
            return(
                <div className='home-collection-wrap'>
                        {
                            data.prismic.allHomes.edges?.map((item: any, i: any) => {
                                return (
                                    <div key={i} className='home_collection_group'>
                                        <h1 className="title">{item.node.collection_heading[0].text}</h1>
                                       <div className='collectio-item-wrap'>
                                            <div className='images_wrap'>
                                            {item.node.home_collection_group.map((item2: any, index1: any) => {
                                                console.log("item2>>new dat", item2, "index111", index1);
                                                return (
                                                
                                                    <Link to={getTitleData(item.node.home_collection_group).link}>
                                                        <img className="c-image" key={index1} src={item2.collection_image.url} />
                                                        <div>{item2.collection_name[0].text}
                                                        {/* <span className="icon-wrap">
                                                            <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
                                                            </path>
                                                            </svg>
                                                        </span> */}
                                                        </div> 
                                                        <div>{item2.discount_price[0].text}</div> 
                                                    </Link>
                                                    )
                                                
                                                })
                                            }
                                            </div>
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

export default HomeCollection;
