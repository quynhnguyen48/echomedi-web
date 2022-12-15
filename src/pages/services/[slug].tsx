import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { PackagesApi } from '@/models/package';
import { ServiceApi } from '@/models/service';

type IBlogUrl = {
  slug: string;
  label: string;
  desc: string;
  detail: string;
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  const json = await new PackagesApi().getAll();
  const blogs = json;
  return {
    paths: blogs.map((v: any) => ({
      params: { slug: v.slug, label: v ? v.label : "" },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
}) => {
  const data = await new ServiceApi().findOne(params!.slug);
  return {
    props: data ? {
      slug: data.slug,
      label: data.label,
      desc: data.desc,
      detail: data.detail,
    } :
    {
      slug: "",
      label: "",
      desc: "",
      detail: "",
    },
  };
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main meta={<Meta title={props.slug} description="Lorem ipsum" />}>
      <div className="pb-8 relative h-96">
      </div>
      <div className='grid grid-cols-1 mx-60'>
        <h1 className="capitalize text-center text-2xl font-semibold mb-4">{props?.label}</h1>
        <h1 className="capitalize text-center text-xl font-semibold">{props.desc}</h1>
        <h1>{props.detail}</h1>
      </div>
      
    </Main>
  );
};

export default Blog;
