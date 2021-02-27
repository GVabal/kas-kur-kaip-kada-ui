import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
