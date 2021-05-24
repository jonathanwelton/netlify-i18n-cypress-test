import { GetStaticPaths, GetStaticProps } from "next";

const Home = ({
	locale,
	type,
}: {
	locale: string;
	type: string;
}): JSX.Element => {
	return (
		<>
			<h1>The locale is: {locale}</h1>
			<h2>The page type is: {type}</h2>
		</>
	);
};
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
	const type = context.params?.slug === "ssg" ? "SSG" : "SSR";

	return {
		props: {
			locale: context.locale,
			type: type,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { slug: "SSG" } }],
		fallback: "blocking",
	};
};
