import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(overview: string,count:number): string {
    return overview.split(" ").splice(0,count).join(" ")
  }

}
