import nextra from "nextra";

const withNextra = nextra({
  search: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
  contentDirBasePath: "/",
});

export default withNextra({
  reactStrictMode: true,
});
