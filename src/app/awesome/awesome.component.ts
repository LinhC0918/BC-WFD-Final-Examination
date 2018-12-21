import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../awesome.service';
import {IAwesome} from '../iawesome';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-awesome',
    templateUrl: './awesome.component.html',
    styleUrls: ['./awesome.component.scss']
})
export class AwesomeComponent implements OnInit {
    awesomeList: IAwesome[] = [];
    createForm: FormGroup;

    constructor(private awesomeService: AwesomeService,
                private router: Router,
                private activeRoute: ActivatedRoute,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createForm = this.formBuilder.group({
            tag: ['', [Validators.required]],
            url: ['', [Validators.required]],
            descriptions: ['', [Validators.required, Validators.minLength(10)]]
        });
        this.getAwesomeList();
    }

    getAwesomeList() {
        return this.awesomeService.getAwesome().subscribe(
            data => {
                this.awesomeList = data;
            }
        );
    }

    deleteAwesome(id) {
        const awesome = this.awesomeList[id];
        this.awesomeService.deleteAwesome(awesome.id).subscribe(
            () => {
                this.awesomeList = this.awesomeList.filter(t => t.id !== awesome.id);
            }
        );
    }

    onSubmit() {
        if (this.createForm.valid) {
            const {value} = this.createForm;
            this.awesomeService.createAwesome(value).subscribe(
                data => {
                    this.awesomeList.unshift(data);
                    this.createForm.reset({
                        tag: '',
                        url: '',
                        descriptions: ''
                    });
                }
            );
        }

    }

    // createAwesome() {
    //     this.router.navigate(['/awesome/create']);
    // }


}
