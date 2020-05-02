import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

import * as GridStyle from "~/styles/Grid";

import HeaderComponent from "~/components/Header/Header";
import LoadingComponent from "~/components/Loading/Loading";
import RepoComponent from "~/components/Repository/Repository";

import API from "~/Services/Api";

const Index = () => {
  const [setUser, setUserState] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [setRepos, setReposState] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUser = useCallback(async () => {
    try {
      setLoading(true);
      const response = await API.get(`/users/felipetrova`);
      setUserState(response.data);

      if (response.data.length === 0) {
        console.log("User not found. Please try again.");
      }
    } catch (error) {
      console.log("User not found. Please try again.");
    }

    setLoading(false);
  });

  const loadRepos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await API.get(`/users/felipetrova/repos`);
      setReposState(response.data);

      if (response.data.length === 0) {
        console.log("Repositories not found. Please try again.");
      }
    } catch (error) {
      console.log("Repositories not found. Please try again.");
    }

    setLoading(false);
  });

  useEffect(() => {
    loadUser();
    loadRepos();
    document.title = "Felipe Trova - Blog";
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}

      <HeaderComponent
        link="/"
        title="My personal blog"
      />

      <div className="mt-45px">
        <GridStyle.Container>
          <GridStyle.Row>
            <GridStyle.Col desktop={2}/>
            <GridStyle.Col
              mobile={12}
              tablet={12}
              desktop={8}
              className="no-margin"
            >
              <div className="card has-text-centered">
                <GridStyle.Row>
                  <GridStyle.Col
                    mobile={4}
                    tablet={3}
                    desktop={4}
                    className="no-margin"
                  >
                    <img src={setUser.avatar_url} />
                  </GridStyle.Col>

                  <GridStyle.Col
                    mobile={8}
                    tablet={9}
                    desktop={8}
                    className="no-margin"
                  >
                    <p className="fn-s30px tx-green">
                      {setUser.name}
                    </p>
                  </GridStyle.Col>
                </GridStyle.Row>

                <GridStyle.Row className="mt-40px">
                  <GridStyle.Col general={12}>
                    <p className="fn-s16px tx-white">
                      {setUser.bio}
                    </p>

                    <p className="fn-s16px tx-white mt-16px">
                      My contacts:
                    </p>

                    <GridStyle.Row>
                      <GridStyle.Col
                        mobile={12}
                        tablet={4}
                        desktop={4}
                        className="no-margin"
                      >
                        <p className="fn-s16px tx-white mt-6px">
                          <Link
                            href="mailto:felipee.trova@gmail.com"
                            prefetch={false}
                          >
                            <a>
                              felipee.trova@gmail.com
                            </a>
                          </Link>
                        </p>
                      </GridStyle.Col>

                      <GridStyle.Col
                        mobile={12}
                        tablet={4}
                        desktop={4}
                        className="no-margin"
                      >
                        <p className="fn-s16px tx-white mt-6px">
                          <Link
                            href="https://twitter.com/felipetrova"
                            prefetch={false}
                          >
                            <a>
                              https://twitter.com/felipetrova
                            </a>
                          </Link>
                        </p>
                      </GridStyle.Col>

                      <GridStyle.Col
                        mobile={12}
                        tablet={4}
                        desktop={4}
                        className="no-margin"
                      >
                        <p className="fn-s16px tx-white mt-6px">
                          <Link
                            href={setUser.html_url}
                            prefetch={false}
                          >
                            <a>
                              {setUser.html_url}
                            </a>
                          </Link>
                        </p>
                      </GridStyle.Col>
                    </GridStyle.Row>
                  </GridStyle.Col>
                </GridStyle.Row>
              </div>
            </GridStyle.Col>
            <GridStyle.Col desktop={2}/>
          </GridStyle.Row>

          <GridStyle.Row>
            {setRepos && setRepos.length > 0 &&
              setRepos.map((item, index) => (
                <GridStyle.Col
                  key={index + 1}
                  mobile={12}
                  tablet={6}
                  desktop={4}
                >
                  <RepoComponent
                    repoProps={item}
                  />
                </GridStyle.Col>
              ))
            }
          </GridStyle.Row>
        </GridStyle.Container>
      </div>
    </>
  );
};

export default Index;
