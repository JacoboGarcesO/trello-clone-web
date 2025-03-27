import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isWorkspaceExpanded: boolean = true;

  constructor(private router: Router) {}

  toggleWorkspace(): void {
    this.isWorkspaceExpanded = !this.isWorkspaceExpanded;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
