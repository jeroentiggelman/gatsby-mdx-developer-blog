import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import SEO from "react-seo-component";
import Img from "gatsby-image";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Image = styled(Img)`
  border-radius: 5px;
`;

// data for SEO component following https://github.com/spences10/react-seo-component
export default ({ data }) => {
  const {
    description,
    siteName,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO
        title={`Home`}
        titleTemplate={siteName}
        titleSeparator={`-`}
        description={description || `nothin'`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              {!!frontmatter.cover ? (
                <Image sizes={frontmatter.cover.childImageSharp.sizes} />
              ) : null}
              <h2>{frontmatter.title}</h2>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
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
          coverCredit
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
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
