import { Routes } from '@angular/router';

// Componentes
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { HomeComponent } from '../../components/home/home.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { StoresComponent } from '../../components/store/stores/stores.component';
import { StoreComponent } from '../../components/store/store/store.component';
import { SearcherComponent } from '../../components/store/searcher/searcher.component';

// Servicios AUTH para protección de páginas mediante logueo
import { AuthGuard } from '../../services/auth.guard';
import { ContestComponent } from '../../components/contest/contest.component';











export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'home',          component: HomeComponent},
    { path: 'faq',            component: FaqComponent },
    { path: 'stores',            component: StoresComponent, canActivate: [AuthGuard] },
    { path: 'store/:id',            component: StoreComponent, canActivate: [AuthGuard] },
    { path: 'searcher/:term',            component: SearcherComponent, canActivate: [AuthGuard] },
    { path: 'contest',            component: ContestComponent, canActivate: [AuthGuard] },

];
