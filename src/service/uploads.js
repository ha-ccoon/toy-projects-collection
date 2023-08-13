import Upload from '@/database/Upload';

export const insertFiles = async (path) => {
  try {
    const fileData = Upload.create({
      path: path,
    });

    console.log(fileData);
    return fileData;
  } catch (err) {
    console.log(err);
  }
};
