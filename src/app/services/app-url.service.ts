import { Injectable } from '@angular/core';

import { appHelpers } from '../shared/services';
import { environment } from '../app.config';

@Injectable({
    providedIn: 'root'
})
export class AppUrlService {
    constructor() { }

    addVideo(): string {
        return this.getUrl('add_queue');
    }

    addFile(): string {
        return this.getUrl('add-file');
    }

    private getUrl(relativeUrl: string): string {
        return `${environment.apiBaseUrl}${appHelpers.getUrl(`v1/${relativeUrl}`)}`;
    }
}