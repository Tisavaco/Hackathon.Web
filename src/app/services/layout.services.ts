import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';

import { Observable} from 'rxjs';

import { AppUrlService } from './app-url.service';

import { AddVideoModel } from '../models';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    fileUploader: FileUploader;

    constructor(private http: HttpClient, private urls: AppUrlService) { 
        const url = this.urls.addFile();
        this.fileUploader = new FileUploader({ url: url});
    }

    addVideo(addVideoModel: AddVideoModel): Observable<any>{
        const url = this.urls.addVideo();
        return this.http.post<any>(url, addVideoModel)
    }

    addFile(file: any){
        this.fileUploader.addToQueue([file]);
        this.fileUploader.uploadAll();
    }
}
