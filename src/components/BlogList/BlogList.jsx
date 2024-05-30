import BlogListItem
 from "../BlogListItem/BlogListItem";
 
import { blogs } from "../../data/blogs";

function BlogList() {
  return (
    <>
      <h2>Blog List Component</h2>

      <BlogListItem blog={[0]} />
    </>
  );
}

export default BlogList;