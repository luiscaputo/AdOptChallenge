export const pathConf = (path: string): string => {
  if (path.startsWith("/")) {
    return process.env.BASE_URL + path;
  } else {
    return process.env.BASE_URL + "/" + path;
  }
};
