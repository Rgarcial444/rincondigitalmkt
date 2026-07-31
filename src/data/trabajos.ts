const imageModules = import.meta.glob<{ default: string }>('/src/assets/trabajos/*.jpg', {
  eager: true,
  query: '?url',
});

export const TRABAJOS_IMAGES: string[] = Object.values(imageModules).map((mod) => mod.default);
