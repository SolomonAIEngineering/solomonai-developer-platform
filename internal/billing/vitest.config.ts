export default async () => {
  const { defineConfig } = await import("vitest/config");
  return defineConfig({
    test: {
      reporters: ["default"],
    },
  });
};
