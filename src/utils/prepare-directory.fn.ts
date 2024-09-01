/**
 * Remove trailing slashes from the directory path
 * @param directory - The directory path
 * @returns The cleaned directory path
 */
export function prepareDirectory(directory: string) {
  return directory.trim().replaceAll(/\/+$/g, "");
}