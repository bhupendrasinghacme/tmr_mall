/** @jsx jsx */
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui';

const brandStaticQuery = graphql`
query {
    prismic {
        allHomes {
            edges {
                node {
                    brand_store_heading
                    brand_store{
                        image_link {
                            ... on PRISMIC__ExternalLink {
                                url
                            }
                     }
                     image
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
        data.push({ type: link.image, link: link.image_link.url });
    });
    return data;
};


const BrandStore = () => (
    <StaticQuery<GatsbyTypes.Query>
        query={`${brandStaticQuery}`}
        render={(data: any) => {
            console.log("brand store data========>", data);
            return (
                <Box className='home-brandstore-wrap'>
                    {
                        data.prismic.allHomes.edges?.map((item: any, i: any) => {
                            //console.log("data==>>soumys", data)
                            return (
                                <Box key={i} className='home-brand--store'>
                                    <Text className="title">{item.node.brand_store_heading[0].text}</Text>
                                    <Box className='images_wrap'>
                                        {item.node.brand_store.map((item2: any, index1: any) => {
                                            //console.log("item2>>new dat", item2, "index111", index1);
                                            return (

                                                <Link key={index1} to={getTitleData(item.node.brand_store).link}>
                                                    <img className="brand_image" src={item2.image.url} />
                                                </Link>

                                            )
                                        })
                                        }
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            )

        }}
    />
);

export default BrandStore;
