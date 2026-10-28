// Currently served from reload.github.io/biblogo, so assets need the /biblogo prefix.
// TODO: once a custom domain is set up (with a public/CNAME file), switch to the line below instead:
// const basePath = "";
const basePath = "/biblogo";

export const addBasePath = (path: string) => {
  return `${basePath}${path}`;
};
