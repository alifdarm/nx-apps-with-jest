export const getEnvTest = () => {
  const env1 = process.env.VITE_ENV_1 || '';
  const env2 = process.env.VITE_ENV_2 || '';

  return env1 + env2;
};
