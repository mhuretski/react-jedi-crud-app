export const LOADING = 'LOADING'

export function setLoading(status) {
  return { type: LOADING, status };
}
