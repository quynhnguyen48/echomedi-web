import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { PackagesApi } from '@/models/package';
import Accordion from '@/templates/Accordion';
import { AppConfig } from '@/utils/AppConfig';

type IBlogUrl = {
  slug: string;
  label: string;
  sub_packages: any;
  desc: string;
  image_url: string;
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async (context) => {
  const json = await new PackagesApi().getAll();
  const blogs = json;
  let paths = blogs.map((v: any, index: any) => ({
    params: { slug: v.slug }, locale: "en"
  }));
  paths = paths.concat(blogs.map((v: any, index: any) => ({
    params: { slug: v.slug }, locale: "vi"
  })));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
  locale
}) => {
  let slug = params!.slug;
  if (locale == "en") {
    slug = slug + "-en";
  }
  const data = await new PackagesApi().findOne(slug);
  return {
    props: {
      slug: data!.slug,
      label: data!.label,
      sub_packages: data.sub_packages,
      desc: data.desc,
      image_url: data.image_url,
    },
  };
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main meta={<Meta title={props.slug} description="Lorem ipsum" />}>
      <div className="pb-8 relative h-96">
        <img src={AppConfig.api_endpoint +  props.image_url} alt="me" className='object-cover w-full h-full h-48 relative'/>
      </div>
      <div className='grid grid-cols-1 mx-60'>
        <h1 className="capitalize text-center text-2xl font-semibold mb-4">{props.label}</h1>
        <h1 className="capitalize text-center text-xl font-semibold">{props.desc}</h1>
      </div>
      {props.sub_packages?.map((sp: any) =>
        // <div>
        //   <h1>{sp.label}</h1>
        //   <img src={"http://localhost:1337" + sp.image.url} />
        //   {sp.services.map((sv: any) => <h1>{sv.label}</h1>)}
        // </div>)}


      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 relative text-xl mx-60">
        <div className='p-10 pr-0 '>
          <p className='text-center text-2xl font-semibold'>{sp.label}</p>
          {sp.image && <img
            className='p-10'
            src={AppConfig.api_endpoint + sp.image?.url}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt='me' />}
        </div>
        <div className='relative p-20 pl-0'>
        {sp.services.map((sv: any) => <Accordion title={sv.label} content={
          <div>
          <p>{sv.desc}</p>
          <div className='columns-3'>
          {sv.price && <p className='font-bold p-5'>{numberWithCommas(sv.price)}<span className='underline'>đ</span></p>}
          {sv.show_buy_btn && <div className='p-5'><button>Mua ngay</button></div>}
          {sv.show_learn_more && <div className='p-5'><a href={"/services/" + sv.slug}>Tìm hiểu thêm</a></div>}
          </div>
          </div>
          } />)}
        </div>
      </div>)}
    </Main>
  );
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Blog;
