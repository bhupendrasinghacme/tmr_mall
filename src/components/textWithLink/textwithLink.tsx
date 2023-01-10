/** @jsx jsx */
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx, Card } from 'theme-ui'
import { Grid } from 'theme-ui'
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

const getTitleData = (links: any) => {
    const data: any = [];
    links.forEach((link: any) => {
        data.push({ type: link.view_offers_text, link: link.text_link.url });
    });
    return data;
};


const TextWithLink = () => (
    <StaticQuery<GatsbyTypes.Query>
        query={`${twlStaticQuery}`}
        render={(data: any) => {
            return (
                <Box className='textwithLink-wrapper'>
                    {
                        data.prismic.allHomes.edges?.map((item: any, i: any) => {
                            return (
                                <Box key={i} className='textwithLink-group'>
                                    <Text className="title">{item.node.top_offers_title[i].text}</Text>
                                    <Box className='twl-item-wrap' sx={{ marginTop: 10, marginBottom: 20 }}>
                                        <Grid gap={2} columns={[2, null, 4]}>
                                            {item.node.top_offers_group.map((item2: any, index1: any) => {
                                                // console.log("check link data ==================>", item.node.top_offers_group)
                                                return (
                                                    <Card
                                                        sx={{
                                                            maxWidth: 256,
                                                            backgroundColor: '#ffb',
                                                            padding: 30
                                                        }} key={"links_" + index1}>
                                                        <Box className='content_wrap'>
                                                            {item2.heading[0].text &&
                                                                <Text className='heading'>{item2.heading[0].text}</Text>
                                                            }
                                                            {item2.sub_heading[0].text &&
                                                                <Text className='sub_heading'>{item2.sub_heading[0].text}</Text>
                                                            }
                                                            {item2.view_offers_text[0].text &&
                                                                <Link to={getTitleData(item.node.top_offers_group)[0].link != undefined ? getTitleData(item.node.top_offers_group)[0].link : ''}>
                                                                    <Text>{item2.view_offers_text[0].text}</Text>
                                                                </Link>
                                                            }
                                                        </Box>
                                                    </Card>
                                                )
                                            })
                                            }
                                        </Grid>
                                    </Box>
                                </Box>

                            )
                        })
                    }
                </Box >

            )

        }}
    />
);

export default TextWithLink;
