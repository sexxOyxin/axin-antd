import { useState } from 'react';
import axios from 'axios';
import { createChunks, checkUploadedChunks } from './uploader';
import { calculateFileHash } from '@/utils/calculateFileHash'

interface UploadOptions {
  onProgress?: (percent: number) => void;
}

export const useUploader = () => {
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file: File, options?: UploadOptions) => {
    setUploading(true);
    const chunks = createChunks(file);
    const hashFile = await calculateFileHash(file);
    console.log('hashFile: ', hashFile);

    const uploaded = await checkUploadedChunks({filename: file.name, hashFile});
    const total = chunks.length;

    for (let i = 0; i < total; i++) {
      if (uploaded.includes(i.toString())) {
        console.log(`Chunk ${i} already uploaded`);
        options?.onProgress?.(Math.round(((i + 1) / total) * 100));
        continue;
      }

      const form = new FormData();
      form.append('chunk', chunks[i]);
      form.append('filename', file.name);
      form.append('chunkIndex', i.toString());
      form.append('hash', hashFile);

      await axios.post('/api/upload', form, {
        onUploadProgress: (e) => {
          const percent = Math.round(((i + e.loaded / e.total!) / total) * 100);
          options?.onProgress?.(percent);
        }
      });
    }

    // 所有分片上传完后发送合并请求
    await axios.post('/api/merge', {
      filename: file.name,
      total,
      hash: hashFile,
    });

    setUploading(false);
  };

  return { uploadFile, uploading };
};
