import { consola } from 'consola';
import dotenv from 'dotenv';
import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';

dotenv.config();

const rootPath = resolve(process.cwd(), 'temp');
const pngPath = resolve(rootPath, 'logo.png');
const svgPath = resolve(rootPath, 'logo.svg');

const apiUrl = process.env.VECTORIZE_URL;
const secretAccessKey = process.env.VECTORIZE_SECRET_ACCESS_KEY;

const convertPngToSvg = async () => {
  if (!apiUrl || !secretAccessKey) {
    consola.error('Please provide VECTORIZE_URL and VECTORIZE_SECRET_ACCESS_KEY in .env file');
    return;
  }

  try {
    // 设置文件路径
    console.info(`Reading PNG file from: ${pngPath}`);

    // 读取PNG文件
    const fileBuffer = await fs.readFile(pngPath);

    // 创建FormData对象
    const formData = new FormData();
    const file = new File([fileBuffer], 'logo.png', { type: 'image/png' });
    formData.append('image', file);

    console.log('Sending request to vectorize API...');

    // 发送请求
    const response = await fetch(apiUrl, {
      body: formData,
      headers: {
        Authorization: `Bearer ${secretAccessKey}`,
      },
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(
        `API request failed with status ${response.status}: ${await response.text()}`,
      );
    }

    // 解析响应
    const responseData = await response.text();

    // 保存SVG文件
    await fs.writeFile(svgPath, responseData);

    consola.log(`Successfully converted logo.png to logo.svg at: ${svgPath}`);
  } catch (error) {
    consola.error('Error:', error);
  }
};

// 执行转换
const run = () => {
  convertPngToSvg();
};

run();
