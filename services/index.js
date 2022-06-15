import {request, gql } from 'graphql-request'

const graphalAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              profilePicture {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
      categories {
        id
      }
    }
  `
  const result = await request(graphalAPI, query)

  return result.postsConnection.edges;
}