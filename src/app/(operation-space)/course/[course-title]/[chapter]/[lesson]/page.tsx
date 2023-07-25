"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";

const CourseDetails = () => {
  const pathname = usePathname();

  const [markdownData, setMarkdownData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/soykot2910/Test-Tutorial-For-Olearnin/main/${pathname}.md`
      );
      const data = await response.text(); // Use .text() instead of .json() for markdown data
      setMarkdownData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <ReactMarkdown>{markdownData}</ReactMarkdown>
    </div>
  );
};

export default CourseDetails;
