/** @jsx jsx */
import { Grid, Box, jsx } from 'theme-ui';
import styles from './../category-blocks/primary/primary.style';

const getCategoryData = (edges: any): any => {
	const data: any = [];
	edges.forEach((category: any, index: number) => {
		data.push({
			id: `brand-${index}`,
			thumbnail: category.image,
			path: category.image_link,
		});
	});
	return data;
};

const BrandSections = ({ brandSection }: any) => {
	const categories = getCategoryData(brandSection);
	console.log("categories>>>>", categories);
	return (

		<Box sx={styles.wrapper}>
			<Grid sx={styles.grid}>
				{categories.map((item: any, index: number) => (
					<div key={'brand_' + index} className='brand-content-wrap'>
						<a href={item.path.url}>
							<img className="brand_image" src={item.thumbnail.url} />
						</a>
					</div>
				))}
			</Grid>
		</Box>
	);
};

export default BrandSections;
