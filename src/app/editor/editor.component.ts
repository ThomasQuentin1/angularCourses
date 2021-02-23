import { Component, OnInit, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  constructor(private router: Router, private adminService: AdminService, private notifierService: NotifierService) {}

  htmlContent = '';
  id = null;
  isEditing = false
  articleForm: FormGroup = new FormGroup({
    name: new FormControl(),
    categories: new FormControl(),
    author: new FormControl()
  });

  ngOnInit() {
   
     const id = this.router.url.split("=")[1];
     if (id ) {
      this.adminService.getArticle(id).subscribe(article => {
        console.log(article)
        this.htmlContent = article.text;
        this.articleForm.setValue({name: article.name, categories: article.categories.join(", "), author: article.author});
        this.isEditing = true;
        this.id= id;
      });
     }
  }

  submit() {
    if (this.isEditing === false) {
      this.adminService.createArticle(this.articleForm.value.name, this.articleForm.value.categories.split(",").map((e:string) => e.trim()), this.htmlContent, this.articleForm.value.author)
      this.notifierService.notify("success", "the article has been created");
    } else {
       this.adminService.updateArticle(this.id, this.articleForm.value.name, this.articleForm.value.categories.split(",").map((e:string) => e.trim()), this.htmlContent, this.articleForm.value.author)
      this.notifierService.notify("success", "the article has been updated");
    }
  }
  
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}
