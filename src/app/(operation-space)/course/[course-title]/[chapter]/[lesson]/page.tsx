"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const CourseDetails = () => {
  const pathname = usePathname();

  console.log(pathname.replace("/course", ""));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/desyed/Test-Tutorial-For-Olearnin/main/${pathname}.md`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1 className="mb-5 text-2xl">About Javascript</h1>
      <p>
        Before you learn more advanced Next.js features, it would be helpful to
        understand the basics of how Next.js works.
      </p>
      <p>
        At the beginning of this course, we talked about how React is relatively
        unopinionated about how you build and structure your applications -
        there are multiple ways to build applications with React. Next.js
        provides a framework to structure your application, and optimizations
        that help make both the development process and final application
        faster.
      </p>
      <p>
        In the next sections, we’ll look at what happens to your application
        code during these different stages:
      </p>
      <ul>
        <li>
          The environment <strong>where</strong> your code runs:{" "}
          <strong>Development vs. Production</strong>
        </li>
        <li>
          <strong>When</strong> your code runs:{" "}
          <strong>Build Time vs. Runtime</strong>
        </li>
        <li>
          <strong>Where</strong> rendering happens:{" "}
          <strong>Client vs. Server</strong>
        </li>
      </ul>
      <p>
        Now let’s dive deeper into these concepts and discuss some of the
        processes Next.js is doing behind the scenes.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        consequuntur debitis distinctio eaque eum explicabo facere harum
        inventore itaque maiores mollitia nesciunt nulla obcaecati quas quidem
        quos reiciendis temporibus voluptate?
      </p>
    </div>
  );
};

export default CourseDetails;
