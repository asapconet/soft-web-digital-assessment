import config from "@/app/utils/config";

const configOptions = () => {
  if (typeof window === "undefined") return {};

  if (!window.localStorage.getItem(config.key.token)) return {};

  const accessToken = window.localStorage.getItem(config.key.token);

  if (!!accessToken) {
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }
};

const verificationConfigOptions = () => {
  if (typeof window === "undefined") return {};

  if (!window.localStorage.getItem(config.key.verifyToken)) return {};

  const accessToken = window.localStorage.getItem(config.key.verifyToken);

  if (!!accessToken) {
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }
};

const getHeaders = (accessToken: any) => {
  return {
    Authorization: accessToken,
  };
};

export { configOptions, getHeaders, verificationConfigOptions };
