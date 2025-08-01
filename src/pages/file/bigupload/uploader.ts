const CHUNK_SIZE = 2 * 1024 * 1024; // 2MB

export function createChunks(file: File, chunkSize = CHUNK_SIZE) {
  const chunks = [];
  let cur = 0;
  while (cur < file.size) {
    chunks.push(file.slice(cur, cur + chunkSize));
    cur += chunkSize;
  }
  return chunks;
}

export async function checkUploadedChunks({ filename, hashFile }: { filename: string; hashFile: string }): Promise<string[]> {
  const res = await fetch(`/api/uploaded?filename=${filename}&hash=${hashFile}`);
  return res.json();
}
