import formidable from 'formidable';
import FormData from 'form-data';
import { insertMultipart } from '@/service/uploads';
import { insertTexts } from '@/service/post';

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
    const [fields, multipart] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, multipart) => {
        if (err) {
          return reject(err);
        }

        return resolve([fields, multipart]);
      });
    });

    // 텍스트 데이터 삽입
    const title = fields.title[0];
    const content = fields.content[0];

    insertTexts(title, content);

    //멀티파트 데이터 삽입
    const multipartData = multipart.file;

    multipartData.forEach((fileObj, index) => {
      // console.log(fileObj.filepath);
      insertMultipart(fileObj.filepath);
    });

    res.json(multipartData);
  } catch (err) {
    console.error(err);
  }
};

export default upload;
