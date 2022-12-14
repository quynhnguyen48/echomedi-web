import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { BlogApi } from '@/models/blog';

type IBlogUrl = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  // make a get request to server to see how many blogs are there
  const json = await new BlogApi().getAll();
  // assuming using axios
  const blogs = json;
  console.log('blogs', blogs)
  return {
    paths: blogs.map((v: any, index: any) => ({
      params: { slug: v.slug},
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
}) => {
  return {
    props: {
      slug: params!.slug,
    },
  };
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main meta={<Meta title={props.slug} description="Lorem ipsum" />}>
      <h1 className="capitalize">{props.slug}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos
        earum doloribus, quibusdam magni accusamus vitae! Nisi, sunt! Aliquam
        iste expedita cupiditate a quidem culpa eligendi, aperiam saepe dolores
        ipsum!
      </p>
    </Main>
  );
};

export default Blog;
