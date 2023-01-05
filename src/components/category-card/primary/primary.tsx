/** @jsx jsx */
import { Link } from "gatsby";
import Img from "gatsby-image";
import { RichText } from "prismic-reactjs";
import { IoMdArrowForward } from "react-icons/io";
import { Box, Heading, Text, jsx } from "theme-ui";
import styles from "./primary.style";
 
type PropsType = {
	thumbnail: string;
	title: string;
	price: string;
	path: string;
	btnTex?: string;
};

const PrimaryCard: React.FC<PropsType> = ({
	thumbnail,
	title,
	price,
	path,
	btnTex,
}) => {
	const categoryTitle = RichText.asText(title);
	const categoryPrice = RichText.asText(price);
	return (
		<Box sx={styles.wrapper}>
			<Link to={`/collection/${path}`}>
				<Box as="figure" sx={styles.figure}>
					{thumbnail ? <Img fluid={thumbnail} alt={categoryTitle} /> : null}
					<Box as="figcaption" sx={styles.figcaption}>
						<Text className="textBtn" sx={styles.textBtn}>
							<Text as="span">{btnTex ? btnTex : "View Items"} </Text>
							<IoMdArrowForward />
						</Text>
						<Heading as="h3">{categoryTitle}<br/>
						<span className="product--price">{categoryPrice}</span>
						</Heading>
						
					</Box>
				</Box>
			</Link>
		</Box>
	);
};

export default PrimaryCard;
