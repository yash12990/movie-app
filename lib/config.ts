type EnvironmentConfig = {
  apiURL: string;
};

const developmentConfig: EnvironmentConfig = {
  apiURL: process.env.NEXT_PUBLIC_API_URL_STAGE || "",
};

const productionConfig: EnvironmentConfig = {
  apiURL: process.env.NEXT_PUBLIC_API_URL_PROD || "",
};

const config = developmentConfig; // STAGE
// const config = productionConfig;           // PROD
export default config;
