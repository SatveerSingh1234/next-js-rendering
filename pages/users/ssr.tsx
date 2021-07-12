import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { UserModel } from '../../models/users';
import styles from '../../styles/Users.module.css';
import Link from 'next/link';
import { getUsersList } from '../../services/UserService';

const ServerSideRenderingComponent = ({
  users,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const visitDetailsPage = (id: number) => {
    router.push(`/users/${id}`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Users</title>
        <meta name="description" content="List the users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2> Data loading using Server Side Rendering (SSR)</h2>
        <p>
          Last Fetched Date is always changed because of server side rendering (
          <b>SSR</b>)
        </p>
        <p>
          Use server side rendering when data is changed on almost every request and{' '}
          <br />
          you want to do SEO of public data (Otherwise, for private data you can
          use client side routing (<b>CSR</b>)).
        </p>
        <p>
          <i>
            <b> getServerSideProps </b>
          </i>
          is responsible for SSR
        </p>
        <table className={styles.tblUsers}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Created Date</th>
              <th>Last Fetched Date</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.length &&
              users.map((user, idx) => (
                <tr key={idx} onClick={() => visitDetailsPage(user.id)}>
                  <td> {user.id}</td>
                  <td> {user.name}</td>
                  <td> {user.createdDate}</td>
                  <td> {user.lastRenderedAt}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div>
          {' '}
          <Link href="/">Back to Home page</Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://asiasoftwaresolutions.com/"
          target="_blank"
          rel="noreferrer"
        >
          App By Satveer from Asia Software Solutions
        </a>
      </footer>
    </div>
  );
};

// This function gets called at on every request
export const getServerSideProps = async () => {
  // Call an external API endpoint to get users list
  const users = await getUsersList();

  return {
    props: {
      users,
    },
  };
};

export default ServerSideRenderingComponent;
