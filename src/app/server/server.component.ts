import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
  // styles: [`
  //   .online {
  //     backgroundColor: red;
  //   }
  // `]
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = '';
  textColor = '';
  serverTest = 'xxx';

  serverInfo = [10, 'offline']

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
   }

  ngOnInit(): void {
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getTextColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

}
