import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BookService}                          from '../book.service';
import {ActivatedRoute, Router}               from '@angular/router';
import {CacheService}                         from '../cache.service';

@Component({
    selector     : 'app-delete',
    templateUrl  : './delete.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DeleteComponent {
    id: number;
    constructor(
        private bookService: BookService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private cache: CacheService,
    ) {
        this.id = this.activatedRoute.snapshot.params.id;

    }

    onDelete(): void {
        this.bookService.deleteById(this.id).toPromise().then(()=>{
            this.cache.set('success', 'Xóa thành công.');
            this.router.navigate(['']);
        });
    }
}
