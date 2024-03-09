import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portafolio';

  // imagenes proyecto astronomia
  projectAstronomy: any = [
    "../assets/images/app-astronomy-home.webp",
    "../assets/images/app-astronomy-asteroids.png",
    "../assets/images/app-astronomy-patents.png"
  ];
  imgNowAstronomy: any;
  indexImg = 0;

  // imagenes proyecto trelo
  projectTelo: any = [
    "../assets/images/app-telo-home.png",
    "../assets/images/app-telo-drop.png",
    "../assets/images/app-telo-tarea.png"
  ];
  imgNowTelo: any;
  indexImgTelo = 0;


  ngOnInit(): void {
    this.imgNowAstronomy = this.projectAstronomy[this.indexImg];
    this.imgNowTelo = this.projectTelo[this.indexImgTelo];
  }

  changeImage(direction: string){
    if (direction === "right"){
      if(this.indexImg < this.projectAstronomy.length -1){
        this.imgNowAstronomy = this.projectAstronomy[++this.indexImg];
      }else{
        this.imgNowAstronomy = this.projectAstronomy[this.indexImg = 0];
      };
    }
    if (direction === "left"){
      if(this.indexImg == 0){
        this.imgNowAstronomy = this.projectAstronomy[this.indexImg = this.projectAstronomy.length -1];
      }else{
        this.imgNowAstronomy = this.projectAstronomy[--this.indexImg];
      }
    }
  }


  changeImageTelo(direction: string){
    if (direction === "right"){
      if(this.indexImgTelo < this.projectTelo.length -1){
        this.imgNowTelo = this.projectTelo[++this.indexImgTelo];
      }else{
        this.imgNowTelo = this.projectTelo[this.indexImgTelo = 0];
      };
    }
    if (direction === "left"){
      if(this.indexImgTelo == 0){
        this.imgNowTelo = this.projectTelo[this.indexImgTelo = this.projectTelo.length -1];
      }else{
        this.imgNowTelo = this.projectTelo[--this.indexImgTelo];
      }
    }
  }


}
