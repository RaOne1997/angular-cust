import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerModule } from './customer/customer.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: 'dashboard',
                        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                        data: { permission: 'Pages.Tenant.Dashboard' },
                    },
                    {
                        path: 'phonebook',
                        loadChildren: () => import('./phonebook/phonebook.module').then(m => m.PhoneBookModule),
                        data:{permission: 'Pages.Tenant.PhoneBook' }
                    },
                    {
                        path: 'customer',
                        loadChildren: () => import('./customer/customer-routing.module.t').then(m => CustomerModule),
                        data:{permission: 'Pages.Tenant.CustomerBook' }
                    },
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class MainRoutingModule {}
