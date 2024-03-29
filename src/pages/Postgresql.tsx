import { useEffect, useState } from 'react';
import '../styles/postgres.scss';
import anime from 'animejs';
import Layout from '../components/Layout';

const Postgresql = (props: any) => {
    const [users, setUsers] = useState<any>();

    useEffect(() => {
        fetch(`https://${process.env.REACT_APP_HOSTNAME}/postgres/users`)
            .then((r) => r.json())
            .then((r) => {
                console.log(r);
                return r;
            })
            .then((r) => setUsers(r))
            .then(() => {
                anime({
                    targets: '.pg_user',
                    duration: 250,
                    keyframes: [{ scale: 1.05 }, { scale: 1 }],
                    direction: 'normal',
                    easing: 'linear',
                    delay: anime.stagger(50),
                });
            });
    }, []);

    return (
        <Layout>
            <h1 className="text-4xl font-light pb-4 font-work">
                <a
                    href="https://www.postgresql.org/"
                    target="blank"
                    rel="noreferrer"
                >
                    <i className="fas fa-database"></i>{' '}
                    <span className="font-work">PostgreSQL</span>
                </a>{' '}
                Database
            </h1>
            <hr />
            <div className="users">
                {users
                    ? users.map((i: any) => {
                          return (
                              <div
                                  className="pg_user my-2 p-4 rounded-lg"
                                  key={i.id}
                              >
                                  <div className="user_title">
                                      <h3 className="text-2xl">
                                          {i.username + ' - '}
                                      </h3>
                                      <span className="text-xs joined_on">
                                          {' '}
                                          Joined on{' '}
                                          {new Date(
                                              i.created_on
                                          ).toDateString()}
                                      </span>
                                  </div>
                                  <p className="block">
                                      <i className="fas fa-envelope"></i>
                                      <a href={i.email}>{i.email}</a>
                                  </p>
                              </div>
                          );
                      })
                    : null}
            </div>
        </Layout>
    );
};

export default Postgresql;
