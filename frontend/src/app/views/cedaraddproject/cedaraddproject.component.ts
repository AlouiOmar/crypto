import {AnimationOptions} from 'ngx-lottie';
import jQuery from 'jquery';
import { Router } from '@angular/router';
import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Subject} from 'rxjs';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-cedaraddproject',
  templateUrl: './cedaraddproject.component.html',
  styleUrls: ['./cedaraddproject.component.css']
})
export class CedaraddprojectComponent implements OnInit {
  form: FormGroup;
  private map = null;

  myId: any;
  lng: any;
  lat: any;
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param bookService
   * @param {FormBuilder} formBuilder
   */
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private projectService: ProjectService
  )
  {
     
     // this.myId = uuid.v4();

      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {

      // Reactive Form
      this.form = new FormGroup({
          
          
          name  : new FormControl('', Validators.minLength(5)) ,
          location   : new FormControl('', Validators.required),
          description      : new FormControl('', Validators.required),
      });
  

  }
  onSubmit(data): void {
    console.log(data);
    this.projectService.add(data).subscribe((resp) => {console.log(resp)
      this.router.navigateByUrl('/cedarproject');
    });
    console.warn('Your project has been added', data);
}
}
