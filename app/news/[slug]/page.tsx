import { notFound } from 'next/navigation';
import { getNewsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/ButtonLink';
import styles from './page.module.css';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  // return <div>{JSON.stringify(props)}</div>;
  const data = await getNewsDetail(params.slug).catch(notFound);
  // return <div>{data.title}</div>;
  return (
    <>
      <Article data={data}></Article>
      <div className={styles.footer}>
        <ButtonLink href="news/">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
