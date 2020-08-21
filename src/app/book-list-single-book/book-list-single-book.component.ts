import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list-single-book',
  templateUrl: './book-list-single-book.component.html',
  styleUrls: ['./book-list-single-book.component.css']
})
export class BookListSingleBookComponent implements OnInit {

book: Book;

  constructor(private route: ActivatedRoute, private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.book= new Book ('', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      (book: Book)=> {
        this.book = book;
      }
    );
  }

  onBack(){
    this.router.navigate(['/books']);
  }

}
