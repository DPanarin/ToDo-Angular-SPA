import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
// import { MatProgressBar } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './tasks.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { FormComponent } from './form/form.component';
import { TaskResolverService } from './task-resolver.service';
import { CrossOutDirective } from './cross-out.directive';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { WidthChangeDirective } from './width-change.directive';




@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    FormComponent,
    CrossOutDirective,
    ProgressBarComponent,
    WidthChangeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    TasksService,
    TaskResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
