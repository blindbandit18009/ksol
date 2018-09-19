import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  newGame(){
    let modalElement = document.getElementById("jw-modal");+
    console.log(modalElement);
    modalElement.style.display = "none";
    document.location.reload();

  }


  exitGame(){
    let modalElement = document.getElementById("jw-modal");
    modalElement.style.display = "none";
    window.close();

  }

}
