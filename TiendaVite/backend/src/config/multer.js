// src/config/multer.js
import multer from 'multer';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(__dirname, '../../uploads/productos'));
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    const filename = `${Date.now()}.${ext}`;
    cb(null, filename);
  }
});

const upload = multer({ storage });

export default upload;
