const school_idx:(number|string)[] = [402, 431, "812", 311]
https://www.linkedin.com/posts/thetripathi58_mongodb-cheatsheet-chidanand-activity-6951859066335813632-jpaU?utm_source=linkedin_share&utm_medium=member_desktop_web
interface IWorker {
    name:string
    trim: (b:string) => string
}

let obj:IWorker = {
    name: "Armstrong",
    trim: (b = "army") => {
        return b
    }
}