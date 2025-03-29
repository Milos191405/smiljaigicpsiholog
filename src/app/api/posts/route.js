import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const postsFilePath = path.join(process.cwd(), 'src/data/posts.json');
    
    // Use async readFile instead of readFileSync
    const fileContent = await fs.readFile(postsFilePath, 'utf-8');
    const postsData = JSON.parse(fileContent);

    return new Response(JSON.stringify(postsData.articles), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error reading posts:', error);
    return new Response('Failed to load posts', { status: 500 });
  }
}
