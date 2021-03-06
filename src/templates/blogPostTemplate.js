import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

// data for SEO component following https://github.com/spences10/react-seo-component
export default ({ data, pageContext }) => {
  const {
    image,
    siteName,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();

  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title, date, cover } = frontmatter;

  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={title}
        titleTemplate={siteName}
        titleSeparator={`-`}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString}
      />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>Previous page: {previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>Next page: {next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        cover {
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`;
