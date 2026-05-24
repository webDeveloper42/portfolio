import 'dotenv/config';
import mongoose from 'mongoose';
import Project from './models/Project.js';
import Profile from './models/Profile.js';

const profiles = [
  {
    lang: 'en',
    name: 'webDeveloper42 / Raymond F. A.',
    title: 'Entrepreneur & Builder',
    email: 'rfrias1869@gmail.com',
    jobInterests: 'Building products for the Japanese market.',
    tagline: 'I build and ship products that align to spirituality',
  },
  {
    lang: 'es',
    name: 'webDeveloper42 / Raymond F. A.',
    title: 'Emprendedor y Creador',
    email: 'rfrias1869@gmail.com',
    jobInterests: 'Construyendo productos para el mercado japonés.',
    tagline: 'Construyo y lanzo productos digitales que resuelven problemas reales.',
  },
  {
    lang: 'ja',
    name: 'webDeveloper42 / Raymond F. A.',
    title: '起業家・ビルダー',
    email: 'rfrias1869@gmail.com',
    jobInterests: '日本市場向けのプロダクトを構築しています。',
    tagline: '実際の問題を解決するデジタルプロダクトを構築・リリースしています。',
  },
];

const projects = [
  {
    lang: 'en', order: 0,
    title: 'Discover Yourself',
    description: 'A live and monetized spiritual app for users and creators',
    img: '/assets/discover-yourself.png',
    imgAlt: 'A screenshot of the Discover Yourself project',
    tags: ['MERN', 'FullStack'],
    link: 'https://discover-yourself.onrender.com/',
  },
  {
    lang: 'en', order: 1,
    title: 'Shrine Finder',
    description: 'An app that lists shrines into a database of Japan',
    img: '/assets/ShrineFinderDB.png',
    imgAlt: 'A screenshot of the Shrine Database project',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Database', 'API', 'Open Source'],
    link: 'https://webdeveloper42.github.io/shrine-database/',
  },
  {
    lang: 'es', order: 0,
    title: 'Discover Yourself',
    description: 'Una aplicación espiritual en vivo y monetizada para usuarios y creadores',
    img: '/assets/discover-yourself.png',
    imgAlt: 'Una captura de pantalla del proyecto Discover Yourself',
    tags: ['MERN', 'FullStack'],
    link: 'https://discover-yourself.onrender.com/',
  },
  {
    lang: 'es', order: 1,
    title: 'Buscador de Santuarios',
    description: 'Una aplicación que lista santuarios en una base de datos de Japón',
    img: '/assets/ShrineFinderDB.png',
    imgAlt: 'Una captura de pantalla del proyecto Shrine Finder',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Database', 'API', 'Código Abierto'],
    link: 'https://webdeveloper42.github.io/shrine-database/',
  },
  {
    lang: 'ja', order: 0,
    title: 'ディスカバー・ユアセルフ',
    description: 'ユーザーとクリエイター向けの収益化されたスピリチュアルアプリ',
    img: '/assets/discover-yourself.png',
    imgAlt: 'ディスカバー・ユアセルフのスクリーンショット',
    tags: ['MERN', 'フルスタック'],
    link: 'https://discover-yourself.onrender.com/',
  },
  {
    lang: 'ja', order: 1,
    title: 'Shrine Finder',
    description: '日本の神社をデータベースでリストするアプリです。',
    img: '/assets/ShrineFinderDB.png',
    imgAlt: 'Shrine Finderプロジェクトのスクリーンショット',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Database', 'API', 'オープンソース'],
    link: 'https://webdeveloper42.github.io/shrine-database/',
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('[Seed] Connected to MongoDB');

  await Profile.deleteMany({});
  await Project.deleteMany({});

  await Profile.insertMany(profiles);
  await Project.insertMany(projects);

  console.log(`[Seed] Inserted ${profiles.length} profiles, ${projects.length} projects`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('[Seed] Error:', err);
  process.exit(1);
});
