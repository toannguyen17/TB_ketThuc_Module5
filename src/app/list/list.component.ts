import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IBook}                                from '../ibook';
import {BookService}                          from '../book.service';
import {CacheService}                         from '../cache.service';

@Component({
    selector     : 'app-list',
    templateUrl  : './list.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
    public books: Array<IBook>;

    public success: string;

    constructor(private bookService: BookService,
                private cache: CacheService) {
    }

    async ngOnInit() {
        this.books   = await this.bookService.findAll().toPromise();
        this.success = this.cache.flash('success');
    }
}
