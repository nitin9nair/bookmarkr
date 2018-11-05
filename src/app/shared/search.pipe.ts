import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if(!items) return []; 
    if(!searchText) return items; 
    if(searchText == ' ') return []; // if search string is a 'space' return empty

    searchText = searchText.toLowerCase();

    return items.filter( it => {
        return it.bookmark_description.toLowerCase().includes(searchText);
        });  
    }
}