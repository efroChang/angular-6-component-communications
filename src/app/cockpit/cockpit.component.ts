import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  //--------------------------------  
  //  Custom Events 
  // -------------------------------
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild( 'serverContentInput' ) serverContentInput: ElementRef; // [KEY]

  // Called by a Child button
  onAddServer( nameInput: HTMLInputElement ) {

    this.serverCreated.emit({           // Broadcast the event and populate the object
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // Called by a Child button
  onAddBlueprint( nameInput: HTMLInputElement ) {

    this.blueprintCreated.emit({        // Broadcast the event and populate the object
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }


  constructor() { }

  ngOnInit() {
  }

}
