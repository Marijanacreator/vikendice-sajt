'use client';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {vikendica} from './sanity/schema';
export default defineConfig({name:'vikendice',title:'Vikendice — uređivanje',projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'unconfigured',dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',basePath:'/studio',plugins:[structureTool()],schema:{types:[vikendica]}});
