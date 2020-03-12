import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pid',
  templateUrl: './pid.component.html',
  styleUrls: ['./pid.component.scss']
})
export class PidComponent implements OnInit {

  constructor() { }
  image_1= "https://observatorio3setor.org.br/wp-content/uploads/2016/08/reprograma.jpg";
  image_2 = "https://www.eusoudev.com.br/wp-content/uploads/2018/11/women-who-code.png";
  image_3 = "https://blog.locaweb.com.br/wp-content/uploads/2017/03/post_blog-dia-da-mulher.png";
  infos = [{"a":1, 'img':  this.image_1}];
  ngOnInit(): void {
  }

}
