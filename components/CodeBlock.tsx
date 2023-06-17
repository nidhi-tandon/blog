import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import React from "react";
interface CodeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
