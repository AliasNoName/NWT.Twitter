import {Pipe, PipeTransform} from 'angular2/core'
import {User as UserModel} from "./../Model/User"

@Pipe({
    name: "containsuser",
    pure: false
})
export class ContainsPipeUsers implements PipeTransform{
    transform(items:UserModel[], args:string[]) : any {
        var keyword = args[0];
        if (keyword == null || keyword.trim() == "") { return items; }
        keyword = keyword.toLowerCase();

        return items.filter(item =>item.getFullName().toLowerCase().indexOf(keyword) != -1
            || item.nickname.toLowerCase().indexOf(keyword) != -1
        );
    }
}