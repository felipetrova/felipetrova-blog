import Link from "next/link";

import * as Style from './RepositoryStyle';

const Repos = ({repoProps}) => {
  const {
    description,
    name,
    html_url
  } = repoProps;

  return (
    <>
      <Style.CardRepo>
        <Link
          href={html_url}
          prefetch={false}
        >
          <a target={"_blank"}>
            <p className="has-text-centered">
              <strong>
                Repository name:
              </strong>
              {" "}
              {name}
            </p>

            <p className="has-text-centered mt-10px">
              {description}
            </p>
          </a>
        </Link>
      </Style.CardRepo>
    </>
  )
};

export default Repos;