import React from "react";
import matter from "gray-matter";
import { marked } from "marked";
import axios from "axios";
import Head from "next/head";
export default function about({ data }) {
  console.log(data);

  return (
    <>
      <Head>
        <title>Contact Us -- BANIDB</title>
      </Head>
      <div className="container px-4 py-4">
        <div
          
          dangerouslySetInnerHTML={{
            __html: marked(data.replace(/["]+/g, "")),
          }}
        ></div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  
  let res = await axios.get(
    "https://raw.githubusercontent.com/abdulwaqar844/TS/main/README.md"
  );
  let { content } = matter(res.data);

  return {
    props: { data: content }, // will be passed to the page component as props
  };
}
