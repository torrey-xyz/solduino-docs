import { useMDXComponents as getThemeMDXComponents } from "nextra-theme-docs";
import type { MDXComponents } from "nextra/mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getThemeMDXComponents(components);
}
