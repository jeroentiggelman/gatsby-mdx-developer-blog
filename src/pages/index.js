import React from "react";
import { Layout } from "../components/Layout";
import { graphql, Link } from "gatsby";

export default ({ data }) => {
  return (
    <>
      <Layout>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <>
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
            <Link to={fields.slug}>Read more...</Link>
          </>
        ))}
      </Layout>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
        }
        id
        excerpt(pruneLength: 250)
        fields {
          slug
        }
      }
    }
  }
`;
