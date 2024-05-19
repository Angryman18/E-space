import getConfig from "next/config";

const config = getConfig();

const { publicRuntimeConfig = {} } = config;

export default config;
export { publicRuntimeConfig };
