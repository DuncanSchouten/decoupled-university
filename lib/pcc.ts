import {
  PantheonAPI,
  type PantheonAPIOptions,
} from "@pantheon-systems/cpub-react-sdk/server";
import { getArticleURLFromSiteWithOptions } from "@pantheon-systems/cpub-react-sdk/server";

export const pantheonAPIOptions: PantheonAPIOptions = {
  resolvePath: getArticleURLFromSiteWithOptions({
    basePath: "/articles",
    maxDepth: -1,
  }),
};

export const pantheonAPIHandler = PantheonAPI(pantheonAPIOptions);
