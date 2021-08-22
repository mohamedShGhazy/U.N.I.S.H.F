// import { Pipe, PipeTransform } from '@angular/core';

// export interface Hero {
//   phone: number | string;
//   name: string;
//   email: string;
//   country: string;
//   date: number;
//   company:string
// }
// @Pipe({
//   name: 'heroOrder',
// })
// export class HeroOrderPipe implements PipeTransform {
//   transform(heroes: Hero[], orderBy: string): unknown {
//     if (!heroes) {
//       return [];
//     }
//     if (!orderBy) {
//       return heroes;
//     }
//     return heroes.sort((a, b) => {
//       if (orderBy === 'name') {
//         return a.name < b.name ? -1 : 1;
//       }
//     });
//   }
// }
