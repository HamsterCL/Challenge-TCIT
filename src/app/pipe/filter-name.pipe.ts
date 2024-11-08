import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const post of value){
      if(post.name.indexOf(arg) > -1){
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}
