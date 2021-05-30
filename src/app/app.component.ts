import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'MovieWish';
    movieWishList: MovieListModel[] = [
  {movieListName:'MCU MOVIES',movies:["IRON MAN","SUPER MAN AMERICA","DARK KNIGHT"]},
  { movieListName: 'DC MOVIES', movies: ["WONDER WOMEN","SUPER MAN","BAT MAN"]},
  {movieListName:'THRILLER MOVIES',movies:["UNDER WATER","A QUIET PLACE","THE INVISIBLE MAN"]},
  {movieListName:'COMEDY MOVIES',movies:["INTERN","PARASITE","LITTLE"]},
  { movieListName: 'ACTION  MOVIES', movies: ["MASTER MINDS", "GAME NIGHT", "SPENSER"] },
  { movieListName: 'ANIMATION MOVIES', movies: ["TOM AND JERRY", "FROZEN", "SCOOBY DO"] }    ]
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
    this.addMovieListpopup = 'block';
    this.editMovieName = ""
    this.editMovieListName = ""
    this.showSelectedMovieList = [];
    this.editFlag = false;
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
