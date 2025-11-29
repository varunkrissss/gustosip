import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * Upload file to Firebase Storage
 * @param file - File object
 * @param path - Folder path in storage
 * @returns Download URL
 */
export const uploadFile = async (file: File, path: string) => {
  try {
    const storageRef = ref(storage, `${path}/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};
