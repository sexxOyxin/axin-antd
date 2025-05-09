const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3001;

// 设置 CORS（本地调试建议加上）
app.use(cors());

// 设置 multer 用于文件接收
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send({ message: 'File uploaded successfully', file: req.file });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
