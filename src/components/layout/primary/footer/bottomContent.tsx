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
    const content_title = data.prismic.allFooter_2s.edges[0].node.bottom_content[0].text_title[0].text;
    const content_desc = data.prismic.allFooter_2s.edges[0].node.bottom_content[0].text_content[0].text;
    console.log("heloo>>",content_desc);
   return(
       <div className='bottom-content-wrap'>
        <h1>{content_title}</h1>
        <p>{content_desc}</p>
       </div>
    
    )
}}
/>
);


export default bottomContent;
