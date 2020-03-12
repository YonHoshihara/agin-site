import { Component } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agin-site';
  infos = [{"a":1}, {"a":2}, {"a":3}];
  map_mundi = "https://quadrosincriveis.com.br/wp-content/uploads/2019/09/qi0610_MapaMundi_black_A3_FLT_preta.png";
  image_1= "https://observatorio3setor.org.br/wp-content/uploads/2016/08/reprograma.jpg";
  image_2 = "https://www.eusoudev.com.br/wp-content/uploads/2018/11/women-who-code.png";
  image_3 = "https://blog.locaweb.com.br/wp-content/uploads/2017/03/post_blog-dia-da-mulher.png";
}

