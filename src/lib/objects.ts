export function setByKey<T>(obj: { [key: string]: T }, key: string, data: T) {
  return { ...obj, [key]: data };
}

export function updateByKey<T>(obj: { [key: string]: T }, key: string, data: Partial<T>) {
  if (!obj[key]) return obj;

  return { ...obj, [key]: { ...obj[key], ...data } };
}

export function getByKey<T>(obj?: { [key: string]: T }, key?: string): T | undefined {
  if (!obj || !key) return undefined;

  return obj[key];
}

export function getMatchingValueFromObject(obj?: { [key: string]: string }, value?: string): string | null {
  if (!obj || !value) return null;
  for (const key of Object.keys(obj)) {
    if (key.toLowerCase() === value.toLowerCase()) {
      return obj[key];
    }
  }
  return null;
}
