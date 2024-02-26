import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

interface RegionPageProps {
  id: string;
}

export default function RegionPage({ id }: RegionPageProps) {
  return <h1>Страница Region с id: {id}</h1>;
}

export const getServerSideProps: GetServerSideProps<RegionPageProps> = async (context) => {
  const { id } = context.query;
  const isValidSlug: boolean = /^[A-Za-z0-9_]+$/.test(id as string);
  if (!isValidSlug) {
    return {
      props: {
        id: 'Error'
      },
      revalidate: 60, // Enable caching for 60 seconds
    }
  }

  return {
    props: {
      id: id as string,
      revalidate: 60, // Enable caching for 60 seconds
    },
  };
};