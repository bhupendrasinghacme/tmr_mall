/** @jsx jsx */
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui';

import React from 'react';
import {
    FaFacebookSquare,
    FaTwitter,
    FaYoutube,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';

type PropsType = {
    item: {
        type: string;
        link: string;
    };
};

const footerStaticQuery = graphql`
	query {
		prismic {
			allFooter_2s {
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
        query={`${footerStaticQuery}`}
        render={(data) => {
            return (

                <div>
                    {
                        data.prismic.allFooter_2s.edges?.map((item: any, i: any) => {
                            console.log("data==>>", data)
                            return (

                                <div key={i}>
                                    <h4 className="menu__title">{item.node.menu_title[0].text}</h4>
                                    {item.node.menu_group.map((item2: any, index1: any) => {
                                        console.log("item2>>", item2, "index111", index1);
                                        return (
                                            <Link to={getTitleData(item.node.menu_group).link}>
                                                <img className="footer_image" key={index1} src={item2.menu_image_1.url} />
                                            </Link>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                    }
                </div >
            )
        }}
    />
);

const SocialLink: React.FC<PropsType> = ({ item }) => {
    const type = item.type.toLowerCase();
    const title = item.type.charAt(0).toUpperCase() + item.type.slice(1);

    const LinkItem = () => {
        switch (type) {
            case 'facebook':
                return (
                    <>
                        <a
                            className={type}
                            href={item.link}
                            data-tip={title}
                            title={title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookSquare />
                        </a>
                    </>
                );
            case 'twitter':
                return (
                    <>
                        <a
                            className={type}
                            href={item.link}
                            data-tip={title}
                            title={title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter />
                        </a>
                    </>
                );
            case 'youtube':
                return (
                    <>
                        <a
                            className={type}
                            href={item.link}
                            data-tip={title}
                            title={title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube />
                        </a>
                    </>
                );
            case 'github':
                return (
                    <>
                        <a
                            className={type}
                            href={item.link}
                            data-tip={title}
                            title={title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </>
                );
            case 'instagram':
                return (
                    <>
                        <a
                            className={type}
                            href={item.link}
                            data-tip={title}
                            title={title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>
                    </>
                );
            case 'linkedin':
                return (
                    <>
                        <a
                            className={type}
                            href={item.link}
                            data-tip={title}
                            title={title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <LinkItem />
        </>
    );
};


export default footerMenuRight;
