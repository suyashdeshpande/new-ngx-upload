import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxUploadComponent} from './uploader/ngx-upload.component';
import {NgxCropComponent} from './cropper/ngx-crop.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgxUploadService} from './ngx-upload.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [NgxUploadComponent, NgxCropComponent],
  exports: [NgxUploadComponent, NgxCropComponent],
  providers: [NgxUploadService]
})
export class NgxUploadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxUploadModule,
      providers: [NgxUploadService]
    };
  }
}
