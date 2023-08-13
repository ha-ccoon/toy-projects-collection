import formidable from 'formidable';
import FormData from 'form-data';
import { insertFiles } from '@/service/uploads';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const upload = async (req, res) => {
  try {
    // formdata 설정
    const formOptions = {
      maxFileSize: 5 * 1024 * 1024,
      keepExtensions: true,
      uploadDir: '../assets/board/uploads',
    };

    const form = formidable(formOptions);

    // formdata 파싱
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          return reject(err);
        }
        // res.json([fields, files]);
        return resolve([fields, files]);
      });
    });

    const filePath = files.files[0].filepath;

    console.log(files.files[0].filepath);
    console.log(fields.title[0]);

    const uploadDB = await insertFiles(filePath);
    res.json({ message: filePath });

    // 데이터베이스 삽입
  } catch (err) {
    console.error(err);
  }
};

export default upload;
