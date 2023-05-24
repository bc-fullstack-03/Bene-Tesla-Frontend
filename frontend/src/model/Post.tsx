export interface Post{
    _id: number;
    "title": String;
    "description": String[];
    "profile":{
        "name": String[];     
    },
    'comments': String[];
    'likes': String[];
    'image':boolean | string;

}

