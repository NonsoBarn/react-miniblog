import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, loading } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="BlogDetails">
      {loading ? (
        <article className="mx-auto py-11 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <div className="md:pb-24 pb-7">
              <Link to="/" className="text-teal-500 text-xs">
                Back To Home
              </Link>
            </div>

            <div className="Header">
              <h1 className="text-black text-4xl font-extrabold sm:text-5xl px-5">
                {blog.title}
              </h1>

              {/* <p className="text-black mt-2 sm:text-md sm:leading-relaxed">
                {blog.subtitle}
              </p> */}
            </div>

            {/* address start */}
            <address className="flex items-center py-10 mt-6 not-italic">
              <div className="inline-flex items-center mx-auto text-sm text-gray-900 dark:text-white">
                <div>
                  <a
                    href="/"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    {blog.author}
                  </a>
                  <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    {blog.authorprof}
                  </p>
                  <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    <time
                      pubdate
                      datetime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
              </div>
            </address>

            {/* address end */}

            <div className="body ">
              <img
                className="md:w-full w-96 mx-auto h-68 "
                src={blog.image}
                alt={blog.alt}
              />

              <div className="body-text pt-10 text-center text-lg mx-auto px-auto  ">
                {blog.body}
              </div>
            </div>
          </div>
        </article>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BlogDetails;
