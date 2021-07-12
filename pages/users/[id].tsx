import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Users.module.css';
import { getUserById, getUsersList } from '../../services/UserService';

const UserComponent = ({
  user,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>User&apos;s data</title>
        <meta name="description" content="List the users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Userid from request {router.query.id}</div>
        <div>User id: {user.id}</div>
        <div>User name: {user.name}</div>
        <div>Last rendered At: {user.lastRenderedAt}</div>
        <div>
          <b> NOTE</b>: On development environment it is rendered on every
          request
        </div>
      </main>
    </div>
  );
};

// This function gets called at build time and used for dynamic routing
export const getStaticPaths = async () => {
  // Call an external API endpoint to get users
  const users = await getUsersList();
  const paths = users.map((user, idx) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

//This function gets called at build time
export const getStaticProps = async (query: any) => {
  // Call an external API endpoint to get post data based on api
  const user = await getUserById(query.params.id);
  return {
    props: {
      user,
    },
  };
};

export default UserComponent;
