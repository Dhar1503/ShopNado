import multer from 'multer';

const storage = multer.memoryStorage(); // for cloudinary buffer upload
const upload = multer({ storage });

export default upload;
