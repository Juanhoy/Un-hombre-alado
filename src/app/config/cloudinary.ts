/**
 * Cloudinary Configuration
 * Replace 'demo' with your Cloudinary Cloud Name
 */
export const CLOUDINARY_CONFIG = {
  cloudName: 'demo', 
  baseUrl: 'https://res.cloudinary.com/demo/image/upload/',
  videoUrl: 'https://res.cloudinary.com/demo/video/upload/',
};

/**
 * Convenience function to generate Cloudinary URLs
 */
export const getCloudinaryUrl = (publicId: string, type: 'image' | 'video' = 'image') => {
  const base = type === 'image' ? CLOUDINARY_CONFIG.baseUrl : CLOUDINARY_CONFIG.videoUrl;
  return `${base}${publicId}`;
};
