const fetch = require("node-fetch");
const AuthToken = "65774a28f38708bcecb90a8494ceed9a283a12ba";
const data = {
    query: `
query getCommits($owner: String!, $name: String!, $cursor: String) {
    repository(owner: $owner, name:$name) {
      defaultBranchRef {
        name
        target {
          ... on Commit {
            history(first: 2, after: $cursor) {
              totalCount
              pageInfo {
                startCursor
                endCursor
              }
              edges {
                cursor
                node {
                  author {
                    email
                    user {
                      login
                    }
                  }
                  message
                  pushedDate
                  deletions
                  additions
                  changedFiles
                }
              }
            }
          }
        }
      }
    }
  }
`,
    variables: {
        owner: "mattzgg",
        name: "react-tagarea",
    },
    operationName: "getCommits",
};

fetch("https://api.github.com/graphql", {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
        Authorization: `Bearer ${AuthToken}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
})
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
