import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  param:any = {};
  
  constructor(private _route: ActivatedRoute){}
    
  ngOnInit(){
        this._route.params.subscribe(params => this.param = params)
    }

}
