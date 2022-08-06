import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FixedPluginComponent } from 'app/shared/fixedplugin/fixedplugin.component';
import { FixedPluginModule } from 'app/shared/fixedplugin/fixedplugin.module';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { FooterModule } from 'app/shared/footer/footer.module';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { SidebarComponent } from 'app/sidebar/sidebar.component';
import { SidebarModule } from 'app/sidebar/sidebar.module';

import { AdminLayoutComponent } from './admin-layout.component';

describe('AdminLayoutComponent', () => {

  let component: AdminLayoutComponent;
  let fixture: ComponentFixture<AdminLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NavbarModule,
        SidebarModule,
        FooterModule,
        FixedPluginModule
      ],
      declarations: [
        AdminLayoutComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        FixedPluginComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should contain a 'sidebar-cmp' div", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('sidebar-cmp')).toBeTruthy();
  })

  it("should contain a 'navbar-cmp' div", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('navbar-cmp')).toBeTruthy();
  })

  it("should contain a 'router-outlet' div", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  })

  it("should contain a 'footer-cmp' div", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('footer-cmp')).toBeTruthy();
  })

  it("should contain a 'fixedplugin-cmp' div", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('fixedplugin-cmp')).toBeTruthy();
  })

});
