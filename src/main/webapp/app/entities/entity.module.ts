import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Blog1BlogModule } from './blog/blog.module';
import { Blog1EntryModule } from './entry/entry.module';
import { Blog1TagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Blog1BlogModule,
        Blog1EntryModule,
        Blog1TagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Blog1EntityModule {}
