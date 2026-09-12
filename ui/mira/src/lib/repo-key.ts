export function normalizeRepoOwner(owner: string): string {
  for (const platform of ["gitlab", "forgejo"]) {
    const prefix = `_${platform}/`
    if (owner.startsWith(prefix)) return owner.slice(prefix.length)
  }
  return owner
}

export function splitRepoKey(repoKey: string): [owner: string, repo: string] {
  const separator = repoKey.lastIndexOf("/")
  if (separator <= 0 || separator === repoKey.length - 1) return ["", ""]
  return [repoKey.slice(0, separator), repoKey.slice(separator + 1)]
}
