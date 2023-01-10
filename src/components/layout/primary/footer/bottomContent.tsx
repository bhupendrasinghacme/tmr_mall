/** @jsx jsx */
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui';


const contentStaticQuery = graphql`
query {
    prismic {
        allFooter_2s {
            edges {
                node {
                    bottom_content{
                        text_title
                        text_content
                     }
                 }
            }
        }
    }
}
`;


const bottomContent: React.FC<{ fluid?: boolean }> = ({ fluid }) => (

    <StaticQuery<GatsbyTypes.Query>
        query={`${contentStaticQuery}`}
        render={(data) => {
            // console.log("data check bottom content=====>", data);
            const content_title = data.prismic.allFooter_2s.edges[0].node.bottom_content[0].text_title[0].text;
            const content_desc = data.prismic.allFooter_2s.edges[0].node.bottom_content[0].text_content[0].text;
            // const content_desc2 = data.prismic.allFooter_2s.edges[0].node.bottom_content[0].text_content2.text;
            // console.log("heloo>>", data.prismic.allFooter_2s);
            return (
                <Box className='bottom-content-wrap'>
                    <Text>{content_title}</Text>
                    <Box>{content_desc}</Box>
                    {/* <p>{content_desc2}</p> */}
                </Box>

            )
        }}
    />
);


export default bottomContent;
