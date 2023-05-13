export interface Post{
    id: String;
    title: String;
    content: String;
    category: String;
    tags: String[];

    profile:{
        name: String;        
    }
    comments:{
        id: String;
        body: String;
        likes:String[];

        profile:{
            photo:boolean;
            photoUri: String;
            id: String;
            name: String;
            username: String;
        }  
    }
    likes:String[];
    photo:boolean;
    photoUri: String;
    likeByUserId ?: String;
}