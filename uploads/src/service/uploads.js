import Upload from '@/database/Upload';

export const insertMultipart = async (path) => {
  try {
    const fileData = await Upload.create({
      path: path,
    });

    return fileData;
  } catch (err) {
    console.log(err);
  }
};
