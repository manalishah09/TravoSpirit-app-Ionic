import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class HomePage {  
  slideOpts = {  
    initialSlide: 1,  
    speed: 300,  
    effect: 'flip',  
  };  
  constructor() {}  
}  

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  

}
