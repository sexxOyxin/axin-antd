const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UPLOAD_DIR = path.join(__dirname, 'uploads');
console.log('UPLOAD_DIR: ', UPLOAD_DIR);
const MERGED_DIR = path.join(__dirname, 'merged');

// 创建目录（如果不存在）
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    console.log('create wenjianjia', dir);
    fs.mkdirSync(dir, { recursive: true });
  }
}
ensureDir(UPLOAD_DIR);
ensureDir(MERGED_DIR);

// 使用 multer 接收文件
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    // 用默认名称保存临时文件
    cb(null, file.originalname + '-' + Date.now());
  },
});
const upload = multer({ storage });

// 接收分片上传
app.post('/api/upload', upload.single('chunk'), (req, res) => {
  const { filename, chunkIndex, hash } = req.body;
  const chunk = req.file;

  if (!filename || !chunkIndex || !chunk || !hash) {
    return res.status(400).send('Missing required fields');
  }

  const chunkDir = path.join(UPLOAD_DIR, `${hash}_${filename}`);
  if (!fs.existsSync(chunkDir)) {
    fs.mkdirSync(chunkDir, { recursive: true });
  }

  const chunkPath = path.join(chunkDir, chunkIndex);
  fs.renameSync(chunk.path, chunkPath);

  res.send({ success: true });
});

// 查询已上传的 chunk
app.get('/api/uploaded', (req, res) => {
  const { filename, hash } = req.query;
  if (!filename || !hash) return res.status(400).send('Missing hash or filename');

  const chunkDir = path.join(UPLOAD_DIR, `${hash}_${filename}`);
  let uploaded = [];

  if (fs.existsSync(chunkDir)) {
    uploaded = fs.readdirSync(chunkDir);
  }

  res.send(uploaded);
});

// 合并分片
app.post('/api/merge', (req, res) => {
  const { filename, hash, total } = req.body;

  if (!filename || !hash || !total) return res.status(400).send('Missing merge params');

  const chunkDir = path.join(UPLOAD_DIR, `${hash}_${filename}`);
  const filePath = path.join(MERGED_DIR, `${hash}_${filename}`);

  if (!fs.existsSync(chunkDir)) return res.status(400).send('No chunks found');

  const writeStream = fs.createWriteStream(filePath);

  let current = 0;

  function appendNext() {
    if (current >= total) {
      writeStream.end();
      fs.rmSync(chunkDir, { recursive: true, force: true });
      return res.send({ success: true, url: `/merged/${hash}_${filename}` });
    }

    const chunkPath = path.join(chunkDir, current.toString());
    const data = fs.readFileSync(chunkPath);
    writeStream.write(data, () => {
      current++;
      appendNext();
    });
  }

  appendNext();
});

// 启动服务
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
