import { QueryClient } from "react-query";
import axios from "axios";
import { AppError } from "./ErrorHandling";
import { useAuth } from "@lib/auth/ui/AuthProvider";

axios.interceptors.request.use(function (config) {
  config.headers = {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    ...config.headers,
  };
  return config;
});

// For interacting with the React Query cache
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors" as RequestMode,
  credentials: "include" as RequestCredentials,
  includeCredentials: true,
};

const handleResponse = (response: Response) => {
  return response.json().then((json) => {
    if (response.status >= 400) {
      // TODO: automatically signout user if session is no longer valid
      throw new AppError(response.status, json.message, json.translationKey);
    } else {
      return json;
    }
  });
};

const getPath = (subpath: string) => {
  return subpath.startsWith("http") ? subpath : `/api/${subpath}`;
};

export const fetcher = {
  get: async (subpath = "", data = {}, additionalOptions = {}) => {
    const params = new URLSearchParams(data).toString();
    const path = getPath(`${subpath}${params ? `?${params}` : ""}`);
    const options = { ...defaultOptions, method: "GET", ...additionalOptions };
    console.log("get request", path);
    let res = await axios.get(path);
    console.log(res);
    return res.data;
  },
  post: (subpath = "", data = {}, additionalOptions = {}) => {
    const path = getPath(subpath);
    const body = JSON.stringify(data);
    const options = {
      ...defaultOptions,
      method: "POST",
      body,
      ...additionalOptions,
    };

    return fetch(path, options).then(handleResponse);
  },
  put: (subpath = "", data = {}, additionalOptions = {}) => {
    const path = getPath(subpath);
    const body = JSON.stringify(data);
    const options = {
      ...defaultOptions,
      method: "PUT",
      body,
      ...additionalOptions,
    };

    return fetch(path, options).then(handleResponse);
  },
  patch: (subpath = "", data = {}, additionalOptions = {}) => {
    const path = getPath(subpath);
    const body = JSON.stringify(data);
    const options = {
      ...defaultOptions,
      method: "PATCH",
      body,
      ...additionalOptions,
    };

    return fetch(path, options).then(handleResponse);
  },
  delete: (subpath = "", data = {}, additionalOptions = {}) => {
    const path = getPath(subpath);
    const body = JSON.stringify(data);
    const options = {
      ...defaultOptions,
      method: "DELETE",
      body,
      ...additionalOptions,
    };

    return fetch(path, options).then(handleResponse);
  },
};
