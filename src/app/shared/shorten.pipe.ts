// ShortenPipe - This custom pipe helps to shorten the length of the string while displaying it in a view
// and can be accessed using 'shorten' keyword.

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten"
})
export class ShortenPipe implements PipeTransform {
  transform(value: string) {
    let limit: number = 30;

    if (value.length > limit) {
      return value.substr(0, limit) + "...";
    }
    return value;
  }
}
