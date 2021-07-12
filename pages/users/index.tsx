import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Users.module.css';
import Link from 'next/link';
import { getUsersList } from '../../services/UserService';

const UsersComponent = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        <h2> Data loading using static site generation (SSG)</h2>
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
          <p>
            Server Side Rendering?
            <b> <Link href="/users/ssr">SSR</Link> </b>
          </p>
          <p>
            Client Side Rendering?
            <b> <Link href="/users/csr">CSR</Link> </b>
          </p>
        </div>
      </main>

     
    </div>
  );
};

// This function gets called at build time
export const getStaticProps = async () => {
  // Call an external API endpoint to get users list
  const users = await getUsersList();

  return {
    props: {
      users,
    },
  };
};

export default UsersComponent;
