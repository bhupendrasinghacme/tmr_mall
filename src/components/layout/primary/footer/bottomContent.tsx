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
console.log(">>>>hello")
}}
/>
);


export default bottomContent;
