import {defineField, defineType} from 'sanity';
export const vikendica = defineType({name:'vikendica',title:'Vikendica',type:'document',fields:[
 defineField({name:'naziv',title:'Naziv',type:'string',validation:r=>r.required()}),
 defineField({name:'slug',title:'Adresa stranice',type:'slug',options:{source:'naziv',maxLength:96},validation:r=>r.required()}),
 defineField({name:'fotografije',title:'Fotografije',description:'Prva fotografija je glavna. Promenite redosled prevlačenjem.',type:'array',of:[{type:'image',options:{hotspot:true},fields:[{name:'alt',title:'Opis fotografije',type:'string'}]}]}),
 defineField({name:'opis',title:'Opis',type:'text'}),
 defineField({name:'cenaPoNoci',title:'Cena po noći (€)',type:'number',validation:r=>r.min(0)}),
 defineField({name:'lokacija',title:'Lokacija',type:'string'}),
 defineField({name:'kapacitet',title:'Broj gostiju',type:'number',validation:r=>r.integer().min(1)}),
 defineField({name:'status',title:'Status',type:'string',initialValue:'slobodno',options:{list:[{title:'Slobodno',value:'slobodno'},{title:'Zauzeto',value:'zauzeto'}],layout:'radio'},validation:r=>r.required()})
],preview:{select:{title:'naziv',subtitle:'lokacija',media:'fotografije.0'}}});
