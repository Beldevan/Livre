import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../model/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:  Book[];
  booksSubscription : Subscription;

  constructor( private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.booksSubscription=this.booksService.booksSubjet.subscribe(
      (books: Book[])=> {
        this.books = books;
      }
    );
    this.booksService.emitBooks();
  }

  onNewBook(){
    this.router.navigate(['/books', 'new']);
  }
  onDeleteBook(book: Book){
    this.booksService.removeBook(book);
  }

  onViewBook(id: number){
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy(){
    this.booksSubscription.unsubscribe();
  }

}
