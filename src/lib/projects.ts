'use server';

import { firestore, storage } from '@/lib/firebase';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { projectCategories, type Project, type ProjectCategory, type ProjectCategoryKey } from './data';

// Helper function to create a slug from a title
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// Function to upload files to Firebase Storage
async function uploadFiles(files: File[]) {
  const uploadPromises = files.map(async (file) => {
    const storageRef = ref(storage, `projects/${createSlug(file.name)}-${Date.now()}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return {
      url: downloadURL,
      hint: 'project image', // AI hint can be added later if needed
    };
  });
  return Promise.all(uploadPromises);
}

export async function addProject(data: {
  title: string;
  description: string;
  client: string;
  duration: string;
  category: string;
  images: File[];
}) {
  try {
    const imageUrls = await uploadFiles(data.images);
    const categoryKey = data.category as ProjectCategoryKey;
    const categoryDetails = projectCategories.find(c => c.key === categoryKey);
    const categoryName = categoryDetails ? categoryDetails.name as ProjectCategory : 'Residential';
    const slug = createSlug(data.title);

    const projectData = {
      title: data.title,
      description: data.description,
      details: {
        client: data.client,
        duration: data.duration,
        services: [], // Services can be added later
      },
      category: categoryName,
      categoryKey: categoryKey,
      slug: slug,
      gallery: imageUrls,
      imageUrl: imageUrls[0]?.url || '',
      dataAiHint: imageUrls[0]?.hint || 'project image',
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(firestore, 'projects'), projectData);
    console.log('Project added with ID: ', docRef.id);
    return docRef.id;

  } catch (error) {
    console.error('Error adding project:', error);
    throw new Error('Failed to add project');
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const projectsCol = collection(firestore, 'projects');
    const projectSnapshot = await getDocs(projectsCol);
    const projectsList = projectSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        // The main image for the list view, we'll use the first from the gallery if not present
        imageUrl: data.imageUrl || data.gallery?.[0]?.url || 'https://placehold.co/600x400.png',
        dataAiHint: data.dataAiHint || 'project image'
      } as Project;
    });
    return projectsList;
  } catch (error) {
    console.error("Error fetching projects: ", error);
    return [];
  }
}
