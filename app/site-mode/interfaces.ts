export interface serviceInterface{
        _id : string,
        service_name : string,
        service_img_link : string,
        service_description : string,
        subservices : string[],
}


export interface servicePageProps{
        params : {
                serviceId : string,
        }
}

export interface artworkInterface{
        _id : string,
        name : string,
        img_url : string,
        date_created : Date,
        project_type : string,
        links : string[],
        medium : string,
        description : string,
}