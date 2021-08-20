import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { reducers } from './store';
import { TodoEffects } from './store/todo/todo.effects';

import { AppComponent } from './app.component';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import { IconSunComponent } from './components/icons/icon-sun.component';
import { IconMoonComponent } from './components/icons/icon-moon.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NewTodoFormComponent } from './components/new-todo-form/new-todo-form.component';
import { TodoCheckmarkComponent } from './components/todo-checkmark/todo-checkmark.component';
import { IconCheckComponent } from './components/icons/icon-check.component';
import { IconCrossComponent } from './components/icons/icon-cross.component';
import { TodoSummaryComponent } from './components/todo-summary/todo-summary.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitchComponent,
    IconSunComponent,
    IconMoonComponent,
    TodoListComponent,
    NewTodoFormComponent,
    TodoCheckmarkComponent,
    IconCheckComponent,
    IconCrossComponent,
    TodoSummaryComponent,
    TodoItemComponent,
    TodoFiltersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodoEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
