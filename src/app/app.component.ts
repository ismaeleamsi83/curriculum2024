import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portafolio';

  @ViewChild ('imgAnimation') imgAnimation!: ElementRef;
  @ViewChild ('imgAnimation2') imgAnimation2!: ElementRef;

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
    this.imgAnimation.nativeElement.classList.add('imgNowAstronomy');

    setTimeout( () => {

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


    }, 500);

    setTimeout( () => {

      this.imgAnimation.nativeElement.classList.remove('imgNowAstronomy');

    }, 1000);
    
  }


  changeImageTelo(direction: string){

    this.imgAnimation2.nativeElement.classList.add('imgNowAstronomy');

    setTimeout( () => {
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
    } , 500);

    setTimeout( () => {
      this.imgAnimation2.nativeElement.classList.remove('imgNowAstronomy');
    }, 1000);
  }


}
