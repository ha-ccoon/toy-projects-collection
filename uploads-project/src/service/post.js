import Post from '@/database/Post';

export const insertTexts = async (title, content) => {
  try {
    const textData = await Post.create({
      title: title,
      content: content,
    });

    return textData;
  } catch (err) {
    console.error(err);
  }
};
