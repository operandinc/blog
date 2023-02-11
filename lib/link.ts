import { Post } from "@/.contentlayer/generated";

export function getPostLink(post: Post) {
  return "posts/" + post._raw.flattenedPath.split("/")[1];
}
