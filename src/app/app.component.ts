import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'MovieWish';
  movieWishList:MovieListModel[]=[{movieListName:'helloo',movies:["movie1","movie 2","movie 3"]},
  {movieListName:'helloo1',movies:["movie1","movie 24","movie 3"]},
  {movieListName:'helloo2',movies:["movie1","movie 21","movie 3"]},
  {movieListName:'helloo3',movies:["movie1","movie 22","movie 3"]},
  {movieListName:'helloo4',movies:["movie1","movie 23","movie 3"]},
  {movieListName:'helloo5',movies:["movie1","movie 25","movie 3"]},]
  permmovieWishList:MovieListModel[]=this.movieWishList
  editMovieListName:string=""
  showSelectedMovieList:string[]=[];
  selectedMovieList:string="";
  addMovieListpopup='none'
  newMovieListMovies:string[]=[];
  searchMovieList:string;
  editMovieName:string=""
  editFlag=false
  count=0
  constructor(){
    // localStorage.setItem('MovieListstore',JSON.stringify(this.permmovieWishList) )
  }
ngOnInit(){
  // this.permmovieWishList=JSON.parse(localStorage.getItem('MovieListstore'))
}

showMovies(i){
  if(this.selectedMovieList===this.movieWishList[i].movieListName){
    this.showSelectedMovieList=null
    this.selectedMovieList=""
  }
  else{
  this.showSelectedMovieList=this.movieWishList[i].movies
  this.selectedMovieList=this.movieWishList[i].movieListName
  }
}
addMovieList(){
  this.addMovieListpopup='block'
}
search(movielistname){
  this.searchMovieList=movielistname
  this.movieWishList=this.permmovieWishList.filter(x=>x.movieListName.includes(this.searchMovieList))
}
add(movieTonewList){
this.newMovieListMovies.push(movieTonewList)
this.editMovieName=""
console.log(this.newMovieListMovies)
}
addNewMovieList(addmovieList){
  this.editMovieName=""
  if(this.editMovieListName){
    this.permmovieWishList.forEach((value,index)=>{
      if(value.movieListName==this.editMovieListName)
      this.permmovieWishList.splice(index,1)
    })
  }
  if(!this.permmovieWishList.find(x=>x.movieListName==addmovieList)){
    this.editMovieListName=""
 let tempNewMovieList:MovieListModel={movieListName:addmovieList,movies:this.newMovieListMovies}
 this.permmovieWishList.push(tempNewMovieList)
 console.log(tempNewMovieList)
 console.log(this.permmovieWishList)
 if(this.searchMovieList)
 this.movieWishList=this.permmovieWishList.filter(x=>x.movieListName.includes(this.searchMovieList))
 else
 console.log(this.permmovieWishList)
 this.newMovieListMovies=[]
 this.addMovieListpopup='none'
//  localStorage.setItem('MovieListstore',JSON.stringify(this.permmovieWishList) )
  }
}
clear(){
  this.newMovieListMovies=[]
  this.addMovieListpopup='none'
}
editMovieList(i){
  this.editMovieListName=this.movieWishList[i].movieListName
  this.newMovieListMovies=this.movieWishList[i].movies
  this.addMovieListpopup='block'
  this.editFlag=true
  this.editMovieName=""
}
deleteMovieList(i){
  console.log(i)
  this.permmovieWishList.splice(i,1)
  
 localStorage.setItem('MovieListstore',JSON.stringify(this.permmovieWishList) )
}
deleteMovie(j){
  this.newMovieListMovies.splice(j,1)
 localStorage.setItem('MovieListstore',JSON.stringify(this.permmovieWishList) )
}
}
class MovieListModel{
  movieListName:string;
  movies:string[]
}
