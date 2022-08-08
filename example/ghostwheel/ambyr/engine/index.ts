
export const get = async (url: string) => {
  const res = await fetch(url);
  return await res;
}
