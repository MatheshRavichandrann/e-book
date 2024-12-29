import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/services';
import { Router } from '@angular/router';
import { BookResponse, PageResponseBookResponse } from '../../../../services/models';

@Component({
  selector: 'app-my-books',
  standalone: false,
  
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent implements OnInit {
  bookResponse: PageResponseBookResponse = {};
    page = 0;
    size = 5;

    constructor(
      private bookService: BookService,
      private router: Router
    ){ }
  
  
    ngOnInit(): void {
      this.findAllBooks();
    }
  
  
    private findAllBooks(){
      this.bookService.findAllBooksByOwner({
        page: this.page,
        size: this.size
      }).subscribe({
        next: (books) => {
          this.bookResponse = books; 
        }
      });
    }
  
  
    goToFirstPage(){
      this.page = 0;
      this.findAllBooks();
    }
  
    goToPreviousPage(){
      this.page--;
      this.findAllBooks();
  
    }
  
  
    goToPage(page: number){
      this.page = page;
      this.findAllBooks();
  
    }
  
    goToNextPage(){
      this.page++;
      this.findAllBooks();
  
    }
  
  
    goToLastPage(){
      this.page == this.bookResponse.totalPage as number - 1;
      this.findAllBooks();
    }
  
  
    get isLastPage(): boolean{
      return this.page == this.bookResponse.totalPage as number -1;
    }


    archiveBook(book: BookResponse){

    }

    shareBook(book: BookResponse){

      
    }

    editBook(book: BookResponse){

      
    }


}