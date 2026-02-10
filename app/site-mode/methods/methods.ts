export default async function fetchData(url : string){
    const Response = await fetch(url, {
        method : "GET", 
    });
    return Response;
}