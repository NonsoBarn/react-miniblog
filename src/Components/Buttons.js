import { useEffect } from "react";

const Buttons = ({ setActiveTag, activeTag, setFiltered, data }) => {
  useEffect(() => {
    if (activeTag === "All") {
      setFiltered(data);
      return;
    }

    const filtered = data.filter((blog) => blog.tag.includes(activeTag));
    setFiltered(filtered);
  }, [activeTag]);

  return (
    <div className="w-full flex-grow   md:w-auto pt-4 md:pt-6">
      <div className="flex items-center justify-center">
        <div className="text-lg pt-5 ">
          <button
            className={
              activeTag === "All"
                ? "text-teal-500 py-2 px-4"
                : "py-2 px-4 text-black hover:text-teal-500 dark:text-white active:text-teal-500"
            }
            onClick={() => setActiveTag("All")}
          >
            All
          </button>
          <button
            className={
              activeTag === "Design"
                ? "text-teal-500 py-2 px-4"
                : "py-2 px-4 text-black hover:text-teal-500 dark:text-white active:text-teal-500"
            }
            onClick={() => setActiveTag("Design")}
          >
            Design
          </button>
          <button
            className={
              activeTag === "Mobile"
                ? "text-teal-500 py-2 px-4"
                : "py-2 px-4 text-black hover:text-teal-500 dark:text-white active:text-teal-500"
            }
            onClick={() => setActiveTag("Mobile")}
          >
            Mobile
          </button>
          <button
            className={
              activeTag === "Tech"
                ? "text-teal-500 py-2 px-4"
                : "py-2 px-4 text-black hover:text-teal-500 dark:text-white active:text-teal-500"
            }
            onClick={() => setActiveTag("Tech")}
          >
            Tech
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
