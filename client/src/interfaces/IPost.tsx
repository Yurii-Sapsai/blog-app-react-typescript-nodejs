export interface IPost {
    _id?: String;
    title: String;
    text: String;
    category: String;
    user: {
        fullName: String
    };
    viewsCount?: Number;
    comments: [];
    createdAt: Date;
    updatedAt: Date;
    __v?: Number
}