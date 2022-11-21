import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // we would give the name "app-servers" in the <div> tag in the needed html file.
  // selector: '.app-servers', // we would give the name ".app-servers" in the <div> tag in the needed html file.
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   addServer: boolean = false;
   serverNo: number = 10;
   serverCreationStatus: string = 'No Server was created';
   serverName = 'TestServer';
   isServerCreated = false;
   servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.addServer = true;
      this.serverNo = 20;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is created! Server name is " + this.serverName;
  }

  onEnterServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

