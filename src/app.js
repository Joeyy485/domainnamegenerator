const adj = ["great", "cool", "amazing", "incredible", "wonderful"];
const pronouns = ["you", "we", "they", "them", "she"];
const nouns = ["website", "project", "company", "business", "idea"];
const ext = [".com", ".net", ".org"];

for (let a = 0; a < adj.length; a++) {
    for (let b = 0; b < pronouns.length; b++) {
      for (let c = 0; c < nouns.length; c++) {
        for (let d = 0; d < ext.length; d++) {
          const domainName = "www." + adj[a] + pronouns[b] + nouns[c] + ext[d];
          console.log(domainName);
        }
      }
    }
  }