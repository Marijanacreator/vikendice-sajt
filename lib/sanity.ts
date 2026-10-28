import {createClient} from 'next-sanity';
import {createImageUrlBuilder} from '@sanity/image-url';
export type CabinImage = {asset:{_ref:string};alt?:string;_key:string};
export type Cabin = {_id:string;naziv:string;slug:string;fotografije?:CabinImage[];opis?:string;cenaPoNoci?:number;lokacija?:string;kapacitet?:number;status:'slobodno'|'zauzeto'};
const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const client=projectId?createClient({projectId,dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',apiVersion:'2026-10-01',useCdn:false,perspective:'published'}):null;
const projection=`{_id,naziv,"slug":slug.current,fotografije,opis,cenaPoNoci,lokacija,kapacitet,status}`;
export async function getCabins():Promise<Cabin[]>{if(!client)return [];return client.fetch(`*[_type == "vikendica" && defined(slug.current)] | order(naziv asc) ${projection}`,{},{next:{revalidate:60}});}
export async function getCabin(slug:string):Promise<Cabin|null>{if(!client)return null;return client.fetch(`*[_type == "vikendica" && slug.current == $slug][0] ${projection}`,{slug},{next:{revalidate:60}});}
export function imageUrl(source:CabinImage,width=1000){return client?createImageUrlBuilder(client).image(source).width(width).auto('format').fit('max').url():'';}
export function price(value?:number){return value===undefined?'Cena na upit':`${new Intl.NumberFormat('sr-RS').format(value)} €`;}
