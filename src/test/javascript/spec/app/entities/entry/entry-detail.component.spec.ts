import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { Blog1TestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { EntryDetailComponent } from '../../../../../../main/webapp/app/entities/entry/entry-detail.component';
import { EntryService } from '../../../../../../main/webapp/app/entities/entry/entry.service';
import { Entry } from '../../../../../../main/webapp/app/entities/entry/entry.model';

describe('Component Tests', () => {

    describe('Entry Management Detail Component', () => {
        let comp: EntryDetailComponent;
        let fixture: ComponentFixture<EntryDetailComponent>;
        let service: EntryService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Blog1TestModule],
                declarations: [EntryDetailComponent],
                providers: [
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    EntryService,
                    EventManager
                ]
            }).overrideTemplate(EntryDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(EntryDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EntryService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Entry(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.entry).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
