// ShortenPipe - This custom pipe helps to shorten the length of the string while displaying it in a view
// and can be accessed using 'shorten' keyword.

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  // name of the pipe to be used in template
  name: "shorten"
})
export class ShortenPipe implements PipeTransform {

  // inbuilt transform method
  transform(value: string) {
    // setting limit for number of characters
    let limit: number = 60;

    if (value.length > limit) {
      return value.substr(0, limit) + "...";
    }
    return value;
  }
}
