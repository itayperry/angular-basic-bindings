import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  //  template: `
	 // <app-server></app-server>
   // <app-server></app-server>
  //  `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;	
  serverCreationStatus = 'No server was created!'
  serverName = 'Testserver';
  serverCreated = false;
  username = '';
  servers = ['TestServer', 'TestServers 2'];
  
  toggleThisData = true;
  displayClicks = [];
  displayClicksCount = 0;


  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 3000)
  }

  ngOnInit() {
  }

  onToggleParagraph() {
    this.displayClicksCount += 1;
    this.displayClicks.push(this.displayClicksCount + " " + new Date() )
    this.toggleThisData = !this.toggleThisData;
  }

  checkUsername() {
  	return (this.username.length > 0 ? true : false);
  }

  resetUsername () {
  	this.username = "";
  }

  onCreateServer() {
  	this.serverCreated = true;
    this.servers.push(this.serverName);
  	this.serverCreationStatus = 'Server was created! And the name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
