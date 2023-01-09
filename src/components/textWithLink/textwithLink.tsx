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
                <div className='textwithLink-wrapper'>
                    {
                        data.prismic.allHomes.edges?.map((item: any, i: any) => {
                            return (
                                <div key={i} className='textwithLink-group'>
                                    <h1 className="title">{item.node.top_offers_title[i].text}</h1>
                                    <div className='twl-item-wrap'>
                                        {item.node.top_offers_group.map((item2: any, index1: any) => {
                                            return (
                                                <div className='content_wrap' key={"links_" + index1}>
                                                    {item2.heading[i].text &&
                                                        <div className='heading'>{item2.heading[i].text}</div>
                                                    }
                                                    {item2.sub_heading[i].text &&
                                                        <div className='sub_heading'>{item2.sub_heading[i].text}</div>
                                                    }
                                                    {item2.view_offers_text[i].text &&
                                                        <Link to={getTitleData(item.node.top_offers_group)[i].link}>
                                                            <div>{item2.view_offers_text[i].text}</div>
                                                        </Link>
                                                    }
                                                </div>

                                            )

                                        })
                                        }

                                    </div>
                                </div>

                            )
                        })
                    }
                </div >
            )

        }}
    />
);

export default TextWithLink;
