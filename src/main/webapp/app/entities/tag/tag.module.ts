import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Blog1SharedModule } from '../../shared';
import {
    TagService,
    TagPopupService,
    TagComponent,
    TagDetailComponent,
    TagDialogComponent,
    TagPopupComponent,
    TagDeletePopupComponent,
    TagDeleteDialogComponent,
    tagRoute,
    tagPopupRoute,
} from './';

const ENTITY_STATES = [
    ...tagRoute,
    ...tagPopupRoute,
];

@NgModule({
    imports: [
        Blog1SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        TagComponent,
        TagDetailComponent,
        TagDialogComponent,
        TagDeleteDialogComponent,
        TagPopupComponent,
        TagDeletePopupComponent,
    ],
    entryComponents: [
        TagComponent,
        TagDialogComponent,
        TagPopupComponent,
        TagDeleteDialogComponent,
        TagDeletePopupComponent,
    ],
    providers: [
        TagService,
        TagPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Blog1TagModule {}
