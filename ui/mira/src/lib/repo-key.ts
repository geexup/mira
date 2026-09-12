export function splitRepoKey(repoKey: string): [owner: string, repo: string] {
  const separator = repoKey.lastIndexOf("/")
  return [repoKey.slice(0, separator), repoKey.slice(separator + 1)]
}
