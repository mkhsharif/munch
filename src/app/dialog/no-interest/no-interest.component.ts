import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-no-interest',
  templateUrl: './no-interest.component.html',
  styleUrls: ['./no-interest.component.css']
})
export class NoInterestComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NoInterestComponent>,
              private router: Router) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.dialogRef.close('SET NOW');
    this.router.navigate(['/profile']);
  }


}
