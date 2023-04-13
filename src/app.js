const adj = ["great", "cool", "amazing", "incredible", "wonderful"];
const pronouns = ["you", "we", "they", "them", "she"];
const nouns = ["website", "project", "company", "business", "idea"];
const ext = [".com", ".net", ".org"];

const a = Math.floor(Math.random() * adj.length);
const b = Math.floor(Math.random() * pronouns.length);
const c = Math.floor(Math.random() * nouns.length);
const extension = ext[Math.floor(Math.random() * ext.length)];
const domainName = adj[a] + pronouns[b] + nouns[c] + extension;

console.log("www." + domainName);
