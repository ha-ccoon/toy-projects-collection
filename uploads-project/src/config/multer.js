import multer from 'multer';
import path from 'path';
import fs from 'fs';

// 폴더 확인
try {
  fs.existsSync('../assets/board/uploads');
} catch (err) {
  console.error(' 폴더가 없습니다. 폴더를 생성합니다');
  fs.mkdirSync('../assets/board/uploads');
}

// 저장 파일 세팅
export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, '../assets/board/uploads');
    },
    filename: (req, file, done) => {
      const extension = path.extname(file.originalname);
      const fileName = path.basename(file.originalname, extension) + extension;
      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 하드디스크에 저장
export const uploadFile = upload.array('files');
