import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Mistercap"
                    date="Jan 8 2020"
                    image={Blog1}
                    title="Building Modern User Interfaces with JavaScript"
                    description="A Showcase of Front-End Development Projects"
                />
                <BlogCard
                    user="Khilan Patel"
                    date="Mar 14 2022"
                    image={Blog2}
                    title="From Vanilla to React"
                    description="My Journey as a Front-End JS Developer"
                />
                <BlogCard
                    user="Khilan.P"
                    date="Feb 12 2023"
                    image={Blog3}
                    title="Pushing the Limits of Creativity with JS"
                    description="Exploring the Intersection of Art and Technology"
                />
            </div>
        </Section>
    );
};

export default Blogs;
