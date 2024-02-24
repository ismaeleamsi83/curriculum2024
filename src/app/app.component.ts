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

  projectAstronomy: any = [
    "../assets/images/app-astronomy-home.webp",
    "../assets/images/app-astronomy-asteroids.png",
    "../assets/images/app-astronomy-patents.png"
  ];
  imgNowAstronomy: any;
  indexImg = 0;

  ngOnInit(): void {
    this.imgNowAstronomy = this.projectAstronomy[this.indexImg];
  }

  changeImage(){
    if(this.indexImg < this.projectAstronomy.length -1){
      this.imgNowAstronomy = this.projectAstronomy[++this.indexImg];
    }else{
      this.imgNowAstronomy = this.projectAstronomy[this.indexImg = 0];
    };
  }


}
