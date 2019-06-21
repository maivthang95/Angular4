import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SortTablePipe } from './pipes/sort-table.pipe';
import { FormatTextPipe } from './pipes/format-text.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
	declarations: [CapitalizePipe, SortTablePipe, FormatTextPipe, FilterPipe],
	imports: [
		CommonModule
	],
	exports: [
		 CommonModule ,
		 CapitalizePipe ,
		 SortTablePipe,
		 FormatTextPipe,
		 FilterPipe
	]
})
export class SharedModule { }
