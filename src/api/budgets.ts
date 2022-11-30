const API_BASE_PATH = "http://192.168.0.121"

export const fetchBudgets = async () => {
  const url = `${API_BASE_PATH}/bdugets`
  const resp = await fetch(url)

  if (!resp.ok) throw resp

  return resp.json() as Promise<T>
}
