import formidable from 'formidable';
import FormData from 'form-data';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const upload = async (req, res) => {
  // formdata 설정
  const form = formidable({
    maxFileSize: 5 * 1024 * 1024,
    keepExtensions: true,
    uploadDir: '../assets/board/uploads',
  });

  // formdata 파싱
  const fileData = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      return resolve(files);
    });
  });

  const formData = new FormData();
  const file = fileData.file;
  console.log(file);

  const api = await fetch('http://localhost:5000', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data; boundary=' + formData.getBoundary(),
    },
    data: formData,
  });

  const status = api.status;

  if (status === 200) {
    res.status(status).json({ success: true });
  } else {
    res.status(500).json('Unknown Error');
  }
};

export default upload;
