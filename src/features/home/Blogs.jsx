import React from "react";
import { motion } from "framer-motion";
import { Service1, Service2, Service3 } from "../../assets";


// Example blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Payments",
    summary: "Explore how digital payments are transforming businesses globally.",
    image: Service1,
    date: "March 28, 2026",
    author: "Admin",
    link: "#",
  },
  {
    id: 2,
    title: "Top 5 Payment Security Tips",
    summary: "Ensure your transactions are secure with these best practices.",
    image: Service2,
    date: "March 20, 2026",
    author: "Admin",
    link: "#",
  },
  {
    id: 3,
    title: "Empayro Integrations You Should Know",
    summary: "Learn about the latest tools that integrate seamlessly with Empayro.",
    image: Service3,
    date: "March 15, 2026",
    author: "Admin",
    link: "#",
  },
];

const BlogCard = ({ post }) => (
  <motion.div
    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    layout
  >
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
      <div className="flex justify-between items-center text-gray-500 text-xs">
        <span>{post.date}</span>
        <span>By {post.author}</span>
      </div>
      <a
        href={post.link}
        className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
      >
        Read More →
      </a>
    </div>
  </motion.div>
);

const BlogS = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogS;