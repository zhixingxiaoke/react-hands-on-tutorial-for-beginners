import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

const client = new OpenAIClient(
    process.env.AZURE_ENDPOINT!,
    new AzureKeyCredential(process.env.AZURE_API_KEY!)
);

export default client