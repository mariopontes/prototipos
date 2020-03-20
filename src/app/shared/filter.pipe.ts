import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if (!args) {
      return value
    }

    const array = value.filter(e => {
      return e.tagClass.toLowerCase().indexOf(args.toLowerCase()) !== -1
    })

    return array
  }

}
