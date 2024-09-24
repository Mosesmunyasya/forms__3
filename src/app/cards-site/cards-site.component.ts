import { Component, OnInit } from '@angular/core';
import { SelectionModel} from '@angular/cdk/collections'

@Component({
  selector: 'app-cards-site',
  templateUrl: './cards-site.component.html',
  styleUrls: ['./cards-site.component.css']
})
export class CardsSiteComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['select', 'name'];
  dataSource = [{ name: 'Mathematics' }, { name: 'Chemistry' }, { name: 'Biology' },{name:'Kiswahili'},{name:'Geography'}];
  
  // SelectionModel for multi-selection
  selection = new SelectionModel<any>(true);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clears selection. */
  toggleAll() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }
}







