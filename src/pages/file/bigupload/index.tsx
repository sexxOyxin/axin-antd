import React, { useState } from 'react';
import { useUploader } from './useUploader';

const BigUploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const { uploadFile, uploading } = useUploader();

  const handleUpload = async () => {
    if (!file) return;
    await uploadFile(file, {
      onProgress: setProgress,
    });
    alert('上传成功！');
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>大文件上传</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        style={{ marginBottom: 12 }}
      />
      <div style={{ marginBottom: 12 }}>
        <button onClick={handleUpload} disabled={!file || uploading}>
          {uploading ? '上传中...' : '开始上传'}
        </button>
      </div>
      <div style={{ width: 300, height: 20, background: '#eee', borderRadius: 4 }}>
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: '#4caf50',
            borderRadius: 4,
            transition: 'width 0.3s',
          }}
        />
      </div>
      <div style={{ marginTop: 8 }}>{progress}%</div>
    </div>
  );
};

export default BigUploadPage;
