import { Link } from "react-router-dom";

const Menu = ({ filtered }) => {
  return (
    <section className="pb-32">
      <div className="BlogCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-11 px-28 place-items-center gap-11 ">
        {filtered.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/${blog.id}`}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-64" src={blog.image} alt={blog.alt} />

                <div className="px-6 py-4">
                  <div className="font-bold text-center text-xl mb-2">
                    {blog.title}
                  </div>
                  {/* <p className="text-gray-700 text-base">{blog.body}</p> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
