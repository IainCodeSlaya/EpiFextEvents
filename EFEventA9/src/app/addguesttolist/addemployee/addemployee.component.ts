import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddguesttolistComponent } from '../addguesttolist.component';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  constructor(
    public eService: EventService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addEmployeetoList() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "30%";
    dialogConfig.data = { };
    this.dialog.open(AddguesttolistComponent, dialogConfig);
  }

}
