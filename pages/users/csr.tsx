import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Users.module.css';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { getUsersList } from '../../services/UserService';
import { UserModel } from '../../models/users';

const ClientSideRenderingComponent = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const usersList = await getUsersList();
      setUsers(usersList);
      setIsLoading(false);
    };
    fetchDataFromApi();
  }, []);

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
        {isLoading ? (
          <div>Loading Data ...</div>
        ) : (
          <Fragment>
            <h2> Data loading using Client Side Rendering (CSR)</h2>
            <p>
              Last Fetched Date is always changed because of client side
              rendering (<b>CSR</b>)
            </p>
            <p>
              Use client side rendering when data is changed on almost every
              request and
              <br /> data is private to user i.e. you don&apos;t want to do SEO
              you can use client side routing (<b>CSR</b>)).
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
                {users.map((user, idx) => (
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
              <Link href="/">Back to Home page</Link>
            </div>
          </Fragment>
        )}
      </main>
    </div>
  );
};

export default ClientSideRenderingComponent;
