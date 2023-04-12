import api from "./utils/api";



export const getBooks = (search)=> api.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=3')
.then(res=>(res.data.items))
.catch(err=>console.log(err))


// export const getDetails = sym =>
// Promise.resolve(dataSet.filter(d => d.sym === sym));