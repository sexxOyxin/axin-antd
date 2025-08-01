import SparkMD5 from 'spark-md5';

export async function calculateFileHash(file: File): Promise<string> {
  const chunkSize = 2 * 1024 * 1024; // 每片 2MB
  const chunks = Math.ceil(file.size / chunkSize);
  const spark = new SparkMD5.ArrayBuffer();
  let current = 0;

  while (current < chunks) {
    const start = current * chunkSize;
    const end = Math.min(start + chunkSize, file.size);
    const chunk = file.slice(start, end);
    const buffer = await chunk.arrayBuffer();
    spark.append(buffer);
    current++;
  }

  return spark.end(); // 返回文件的 hash 字符串
}
