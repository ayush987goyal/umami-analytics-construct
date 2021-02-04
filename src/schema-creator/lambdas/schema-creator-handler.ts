import * as fs from 'fs';
import { Client } from 'pg';

export async function handler(event: AWSLambda.CloudFormationCustomResourceEvent) {
  switch (event.RequestType) {
    case 'Create':
      return createEventHandler();
    case 'Update':
    case 'Delete':
      return;
  }
}

async function createEventHandler() {
  const schemaStr = await fs.promises.readFile('schema.sql', { encoding: 'utf-8' });
  console.log('The schema is:', schemaStr);

  const client = new Client({ connectionString: process.env.DB_URL });
  await client.connect();
  await client.query(schemaStr.toString());
  await client.end();
}
