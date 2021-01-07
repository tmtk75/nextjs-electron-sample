import Link from "next/link";
import Layout from "../components/Layout";
import { Button } from "@material-ui/core";
import Editor from "@monaco-editor/react";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Button
          onClick={() => {
            alert("clicked");
          }}
        >
          Hello World
        </Button>
      </p>
      <Editor height="10vh" language="javascript" />
    </Layout>
  );
};

export default IndexPage;
