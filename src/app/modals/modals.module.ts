import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../core-ui/material/material.module';
import { DirectiveModule } from '../core-ui/directive/directive.module';

import { ModalsService } from './modals.service';

import { ModalsComponent } from './modals.component';
import { DeleteConfirmationModalComponent } from '../wallet/shared/delete-confirmation-modal/delete-confirmation-modal.component';

/* modals */
import { CreateWalletComponent } from './createwallet/createwallet.component';
import { ColdstakeComponent } from './coldstake/coldstake.component';
import { DaemonComponent } from './daemon/daemon.component';
import { SyncingComponent } from './syncing/syncing.component';
import { UnlockwalletComponent } from './unlockwallet/unlockwallet.component';
import { EncryptwalletComponent } from './encryptwallet/encryptwallet.component';
import { AlertComponent } from './shared/alert/alert.component';
/* shared in modals */
import { PassphraseComponent } from './createwallet/passphrase/passphrase.component';
import { PassphraseService } from './createwallet/passphrase/passphrase.service';
import { PasswordComponent } from './shared/password/password.component';
import { MultiwalletComponent } from './multiwallet/multiwallet.component';

import { SnackbarService } from '../core/snackbar/snackbar.service';
import { DaemonConnectionComponent } from './shared/daemon-connection/daemon-connection.component';
import { AutoUpdateComponent } from './auto-update/auto-update.component';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';
import { WalletVerifyResultComponent } from './wallet-verify-result/wallet-verify-result.component';
import { ShutdownComponent } from './shutdown/shutdown.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ClipboardModule,
    /* own */
    MaterialModule,
    DirectiveModule
  ],
  declarations: [
    ModalsComponent,
    DeleteConfirmationModalComponent,
    PassphraseComponent,
    PasswordComponent,
    CreateWalletComponent,
    DaemonComponent,
    SyncingComponent,
    UnlockwalletComponent,
    EncryptwalletComponent,
    AlertComponent,
    ColdstakeComponent,
    MultiwalletComponent,
    DaemonConnectionComponent,
    AutoUpdateComponent,
    ReleaseNotesComponent,
    WalletVerifyResultComponent,
    ShutdownComponent,
    ChangePasswordComponent
  ],
  exports: [
    ModalsComponent,
    DeleteConfirmationModalComponent,
    ClipboardModule
  ],
  providers: [
    ModalsService,
    PassphraseService,
    SnackbarService
  ],
  entryComponents: [
    ModalsComponent,
    DeleteConfirmationModalComponent,
    DaemonComponent,
    SyncingComponent,
    UnlockwalletComponent,
    EncryptwalletComponent,
    AlertComponent,
    DaemonConnectionComponent,
    AutoUpdateComponent,
    ReleaseNotesComponent,
    WalletVerifyResultComponent,
    ShutdownComponent,
    ChangePasswordComponent
  ],
})
export class ModalsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalsModule,
      providers: [
        ModalsService
      ]
    };
  }
}

export { ModalsService } from './modals.service';
export { PassphraseService } from './createwallet/passphrase/passphrase.service';
