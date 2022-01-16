import Prismic from "prismic-javascript";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
var GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_TOKEN;
export const API_LOCALE = process.env.PRISMIC_LOCALE;

// Prismic API endpoint
export const apiEndpoint = process.env.PRISMIC_URL;

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN;

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken });

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

async function fetchAPI(query, { variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  // console.log(`${prismicAPI}`);
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

const queryBlogsForList = () => {
  const query = `{
    allBlogs (sortBy: date_DESC) {
      edges {
        node {
          title
          date
          _meta {
            uid
          }
        }
      }
    }
  }`;
  return query;
};

export async function getBlogsForList() {
  const query = queryBlogsForList();
  const data = await fetchAPI(query);
  return data.allBlogs.edges;
}

const queryAbout = () => {
  const query = `{
      allAbouts {
        edges {
          node {
            profile_picture
            about
            _linkType
          }
        }
      }
    }
    `;
  return query;
};

export async function getAbout() {
  const query = queryAbout();
  const data = await fetchAPI(query);
  return data.allAbouts.edges[0].node;
}

const queryBlogsForFeatured = () => {
  const query = `{
    allBlogs (sortBy: date_DESC, where: { isfeatured: true }) {
      edges {
        node {
          title
          featuredimage
          date
          _meta {
            uid
          }
        }
      }
    }
  }`;
  return query;
};

export async function getBlogsForFeatured() {
  const query = queryBlogsForFeatured();
  const data = await fetchAPI(query);
  return data.allBlogs.edges;
}

const queryPows = () => {
  const query = `{
    allPows (sortBy:order_DESC) {
      edges {
        node {
          organisation
          duration
          role
          contribution
          order
        }
      }
    }
  }`;
  return query;
};

export async function getPows() {
  const query = queryPows();
  const data = await fetchAPI(query);
  return data.allPows.edges;
}

const queryBlogwithSlug = ({ slug }) => {
  console.log(slug);
  const query = `{allBlogs(uid:"${slug}") {
    edges {
      node {
        title
        date
        featuredimage
        excerpt
        keywords
        _meta{
          uid
        }
        body {
          __typename
          ... on BlogBodyQuote{
            primary {
              quote
            }
            label
            type
          }
          ... on BlogBodyImage{
            primary {
              image
            }
            label
            type
          }
          ... on BlogBodyParagraph{
            primary {
              paragraph
            }
            label
            type
          }
          ... on BlogBodyEmbed{
            primary {
              embed
            }
            label
            type
          }
        }
      }
    }
  }
 }`;
  return query;
};

export async function getBlogWithSlug(slug) {
  const query = queryBlogwithSlug({ slug });
  const data = await fetchAPI(query);
  return data.allBlogs;
}
