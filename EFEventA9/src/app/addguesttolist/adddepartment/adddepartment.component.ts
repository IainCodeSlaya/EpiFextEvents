import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddguesttolistComponent } from '../addguesttolist.component';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.scss']
})
export class AdddepartmentComponent implements OnInit {

  constructor(
    public eService: EventService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addDepartmentToList() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "30%";
    dialogConfig.data = { };
    this.dialog.open(AddguesttolistComponent, dialogConfig);
  }

}
