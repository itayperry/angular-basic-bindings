import { Component, Input } from '@angular/core';

@Component ({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
		.online {
			color: white;
		}
		p {
			padding: 0.5rem;
		}
	`]
})
export class ServerComponent  {
	serverId: number = 1;
	serverStatus: string = 'offline';
	
	@Input()
	serverName;

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
	}
	getServerStatus () {
		return this.serverStatus;
	}
	getColor () {
		return this.serverStatus === "online" ? 'green' : 'red';
	}
}